import React, { useState, useRef, useEffect } from "react";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../commonhero/common-hero.jsx";

import RegistrationSteps from "../../components/RegistrationSteps.jsx";
import DiscountConfetti from "./discount-confetti.jsx";
import ConferenceCards from "./ConferenceCards.jsx";
import { Helmet } from "react-helmet";

// ── NEW imports ────────────────────────────────────────────────────────────────
import JournalSupport from "./JournalSupport.jsx";
import Addons from "./Addons.jsx";

// ─── Pricing Calculator ────────────────────────────────────────────────────────
// Receives combinedBase (fee + journal + addons) — discounts apply to the whole
const calculatePricing = ({ baseAmount, participantCategory, hasMembership, hasCoupon }) => {
  const base = parseFloat(baseAmount);
  const membershipFeeAmount = participantCategory?.toLowerCase().includes("student") ? 15 : 20;

  let calc = {
    baseAmount: base,
    membershipFee: 0,
    membershipDiscount: 0,
    couponDiscount: 0,
    totalDiscount: 0,
    finalAmount: base,
    bankTax: 0,
    total: base,
  };

  if (hasMembership && hasCoupon) {
    calc.totalDiscount = base * 0.10;
    calc.membershipFee = membershipFeeAmount;
    calc.membershipDiscount = base * 0.05;
    calc.couponDiscount = base * 0.05;
    calc.finalAmount = base - calc.totalDiscount + calc.membershipFee;
  } else if (hasMembership && !hasCoupon) {
    calc.membershipDiscount = base * 0.05;
    calc.totalDiscount = calc.membershipDiscount;
    calc.membershipFee = membershipFeeAmount;
    calc.finalAmount = base - calc.membershipDiscount + calc.membershipFee;
  } else if (!hasMembership && hasCoupon) {
    calc.couponDiscount = base * 0.05;
    calc.totalDiscount = calc.couponDiscount;
    calc.finalAmount = base - calc.couponDiscount;
  } else {
    calc.finalAmount = base;
  }

  const bankTax = calc.finalAmount * 0.060;
  calc.bankTax = parseFloat(bankTax.toFixed(2));
  calc.total = parseFloat((calc.finalAmount + bankTax).toFixed(2));

  Object.keys(calc).forEach((key) => {
    calc[key] = parseFloat(calc[key].toFixed(2));
  });

  return calc;
};

// ─── Checkout Panel ────────────────────────────────────────────────────────────
// NEW props: selectedJournal, selectedAddons, registrationBase
const CheckoutPanel = ({
  pricing,
  baseSelected,
  participantCategory,
  membership,
  onMembershipToggle,
  couponCode,
  couponStatus,
  onCouponChange,
  onCouponApply,
  onCouponRemove,
  // new
  selectedJournal,
  selectedAddons,
  registrationBase,
}) => {
  const membershipFee = participantCategory?.toLowerCase().includes("student") ? 15 : 20;
  const journalAmount = selectedJournal?.specialPrice || 0;
  const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="md:w-[420px] shrink-0 space-y-4">
      {/* Membership Card */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-blue-700">
              Premium Membership ({membershipFee} USD)
            </h3>
            <p className="text-sm text-blue-600 mt-0.5">Get 5% discount on registration fee</p>
            <p className="text-sm font-bold text-blue-700 mt-2">Fee: ${membershipFee}</p>
          </div>
          <button
            type="button"
            onClick={() => onMembershipToggle(!membership)}
            className={`relative inline-flex h-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
              membership ? "bg-blue-700" : "bg-gray-300"
            }`}
            style={{ width: "52px" }}
            aria-pressed={membership}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ${
                membership ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Coupon Card */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
        <h3 className="text-[15px] font-bold text-blue-700 mb-1">
          Get 5% Discount with a coupon code!
        </h3>
        {couponStatus === "valid" ? (
          <div className="flex items-center justify-between bg-blue-100 border border-blue-300 rounded-xl px-4 py-3 mt-2">
            <span className="text-blue-700 font-semibold text-sm">
              ✓ Coupon &quot;{couponCode}&quot; applied
            </span>
            <button
              type="button"
              onClick={onCouponRemove}
              className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => onCouponChange(e.target.value.toUpperCase())}
              placeholder="Enter coupon code"
              className="flex-1 border border-blue-300 bg-white rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <button
              type="button"
              onClick={onCouponApply}
              className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Apply
            </button>
          </div>
        )}
        {couponStatus === "invalid" && (
          <p className="text-red-500 text-xs mt-1">✗ Invalid or expired coupon code.</p>
        )}
      </div>

      {/* Price Breakdown */}
      {baseSelected && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <h3 className="text-[15px] font-bold text-blue-700 mb-4">Price Breakdown</h3>
          <div className="space-y-2 text-sm">

            {/* Base registration fee */}
            <div className="flex justify-between text-gray-700">
              <span>Base Registration Fee:</span>
              <span className="font-medium">
                ${(registrationBase ?? pricing.baseAmount).toFixed(2)}
              </span>
            </div>

            {/* Journal support row */}
            {journalAmount > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Journal Support ({selectedJournal?.tier}):</span>
                <span className="font-medium">+ ${journalAmount.toLocaleString()}</span>
              </div>
            )}

            {/* Add-ons row */}
            {addonsAmount > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Add-ons ({selectedAddons.length} selected):</span>
                <span className="font-medium">+ ${addonsAmount}</span>
              </div>
            )}

            {/* Combined subtotal */}
            {(journalAmount > 0 || addonsAmount > 0) && (
              <div className="flex justify-between text-gray-800 font-semibold border-t border-dashed border-blue-200 pt-2 mt-1">
                <span>Combined Subtotal:</span>
                <span>
                  ${(
                    (registrationBase ?? pricing.baseAmount) +
                    journalAmount +
                    addonsAmount
                  ).toLocaleString()}
                </span>
              </div>
            )}

            {/* Discounts */}
            {pricing.membershipDiscount > 0 && (
              <div className="flex justify-between text-blue-700">
                <span>Membership Discount (5%):</span>
                <span className="font-semibold">- ${pricing.membershipDiscount.toFixed(2)}</span>
              </div>
            )}
            {pricing.couponDiscount > 0 && (
              <div className="flex justify-between text-blue-700">
                <span>Coupon Discount (5%):</span>
                <span className="font-semibold">- ${pricing.couponDiscount.toFixed(2)}</span>
              </div>
            )}
            {pricing.membershipFee > 0 && (
              <div className="flex justify-between text-gray-700">
                <span>Membership Fee:</span>
                <span className="font-medium">+ ${pricing.membershipFee.toFixed(2)}</span>
              </div>
            )}

            <div className="border-t border-blue-200 my-2" />

            <div className="flex justify-between font-bold text-gray-800">
              <span>Subtotal:</span>
              <span>${pricing.finalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Bank Convenience Charge (6%):</span>
              <span>${pricing.bankTax.toFixed(2)}</span>
            </div>

            <div className="border-t border-blue-200 my-2" />

            <div className="flex justify-between text-blue-800 font-bold text-base">
              <span>Total Amount:</span>
              <span>${pricing.total.toFixed(2)}</span>
            </div>

            {pricing.totalDiscount > 0 && (
              <div className="mt-3 bg-blue-100 border border-blue-200 rounded-xl px-4 py-2.5 text-center">
                <span className="text-blue-700 font-semibold text-sm">
                  🎉 You saved ${pricing.totalDiscount.toFixed(2)}!
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {!baseSelected && (
        <div className="rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-5 text-center text-sm text-blue-700">
          ↑ Select a registration fee from the table above to see your price breakdown.
        </div>
      )}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const RegistrationFee = () => {
  useEffect(() => {
    const loadRazorpay = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };
    if (!document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      loadRazorpay();
    }
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const Early_Bird_Last_Date = new Date("10 March 2026");
  Early_Bird_Last_Date.setHours(23, 59, 59, 999);
  const Final_Last_Date = new Date("20 March 2026");
  Final_Last_Date.setHours(23, 59, 59, 999);
  const dateNow = new Date();
  const isEarlyBird = dateNow <= Early_Bird_Last_Date;
  const isFinal = dateNow <= Final_Last_Date;

  const navigate = useNavigate();
  const RegistrationFeeRef = useRef();

  // Form state
  const [participantCategory, setParticipantCategory] = useState("");
  const [selectedBase, setSelectedBase] = useState(null);

  // ── NEW: Journal & Addons state ──────────────────────────────────────────────
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Reset journal & addons when fee changes
  useEffect(() => {
    setSelectedJournal(null);
    setSelectedAddons([]);
  }, [selectedBase]);

  // Discount state
  const [membership, setMembership] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [appliedCouponCode, setAppliedCouponCode] = useState("");

  // ── Derived pricing — discounts apply to (fee + journal + addons) ────────────
  const journalAmount = selectedJournal?.specialPrice || 0;
  const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const combinedBase = selectedBase
    ? selectedBase.value + journalAmount + addonsAmount
    : 0;

  const pricing = selectedBase
    ? calculatePricing({
        baseAmount: combinedBase,
        participantCategory,
        hasMembership: membership,
        hasCoupon: couponDiscount > 0,
      })
    : {
        baseAmount: 0,
        membershipDiscount: 0,
        couponDiscount: 0,
        membershipFee: 0,
        totalDiscount: 0,
        finalAmount: 0,
        bankTax: 0,
        total: 0,
      };

  const handleBaseSelect = (value, title, category) => {
    setSelectedBase({ value, title, category });
  };

  const handleMembershipToggle = (checked) => {
    setMembership(checked);
  };

  const handleCouponApply = async () => {
    if (!couponCode.trim()) return;
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/coupon/validate`, {
        code: couponCode,
      });
      setCouponStatus("valid");
      setCouponDiscount(data.discountPercent);
      setAppliedCouponCode(couponCode);
      toaster.success(data.message);
    } catch (error) {
      setCouponStatus("invalid");
      setCouponDiscount(0);
      setAppliedCouponCode("");
      toaster.danger(error.response?.data?.message || "Invalid coupon");
    }
  };

  const handleCouponRemove = () => {
    setCouponCode("");
    setCouponStatus(null);
    setCouponDiscount(0);
    setAppliedCouponCode("");
  };

  const HandleRegistration = async (e) => {
    e.preventDefault();

    if (!selectedBase) {
      toaster.warning("Please select a registration fee from the table.");
      return;
    }

    const formData = new FormData(RegistrationFeeRef.current);
    const formFields = Object.fromEntries(formData.entries());

    if (!formFields.Terms_and_Conditions) {
      toaster.warning("Please accept the Terms and Conditions.");
      return;
    }
    if (!formFields.presentation_Category) {
      toaster.warning("Please select a Presentation Category.");
      return;
    }
    if (!formFields.presentation_Type) {
      toaster.warning("Please select a Presentation Type.");
      return;
    }

    const selectedFeePayload = {
      title:              selectedBase.title,
      category:           selectedBase.category,
      value:              pricing.baseAmount,       // combinedBase
      convenience_price:  pricing.bankTax,
      total:              pricing.finalAmount,
      discountApplied:    membership && couponDiscount > 0 ? 10 : membership || couponDiscount > 0 ? 5 : 0,
      membershipFee:      pricing.membershipFee,
      membershipSelected: membership,
      couponCode:         couponDiscount > 0 ? appliedCouponCode : null,
      finalTotal:         pricing.total,

      // ── NEW: breakdown fields ────────────────────────────────────────────────
      registrationBase: selectedBase.value,
      journalSupport: selectedJournal
        ? {
            tier:    selectedJournal.tier,
            package: selectedJournal.package,
            amount:  selectedJournal.specialPrice,
          }
        : null,
      journalAmount,
      addons: selectedAddons.map((a) => ({
        label:    a.label,
        sublabel: a.sublabel,
        amount:   a.price,
      })),
      addonsAmount,
    };

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/registration`, {
        ...formFields,
        selectedFee: selectedFeePayload,
      });

      const options = {
        key:         import.meta.env.VITE_RAZORPAY_KEY,
        amount:      data.amount,
        currency:    "USD",
        name:        "Confworld Educational Research and Development Association (CERADA)",
        description: "APCEESH-2026 Conference Registration",
        image:       "https://i.postimg.cc/3RcrXjsP/cerada-logo.webp",
        order_id:    data.order_id,
        handler: async (response) => {
          try {
            await axios.post(`${import.meta.env.VITE_API_URL}/payment/validate`, {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_signature:  response.razorpay_signature,
              Order_ID:            data.order_id,
            });
            navigate("/success", {
              state: {
                amount:    (data.amount / 100).toFixed(2),
                paymentId: response.razorpay_payment_id,
              },
            });
          } catch (error) {
            toaster.danger("Payment verification failed. Please contact support.");
            console.error(error);
          }
        },
        prefill: {
          name:    formFields.first_name,
          email:   formFields.email,
          contact: formFields.number,
        },
        theme: { color: "#1e3a8a" },
        modal: {
          ondismiss: async () => {
            try {
              await axios.post(`${import.meta.env.VITE_API_URL}/payment/cancel`, {
                order_id: data.order_id,
              });
            } catch {}
            toaster.warning("Payment window closed.");
          },
        },
      };

      if (!window.Razorpay) {
        toaster.danger("Payment gateway not available. Please refresh the page.");
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        toaster.danger(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } catch (error) {
      toaster.danger(
        error.response?.data?.message || "Payment processing failed. Please try again."
      );
      console.error("Payment error:", error);
    }
  };

  // ── Fee Data (unchanged) ───────────────────────────────────────────────────
  const participationFees1 = [
    {
      title: "Physical (Onsite) Participants",
      categories: [
        { category: "Academicians/Delegates/Research Scholars/PhD candidates", earlyBird: 380, final: 420, onspot: 500 },
        { category: "UG/PG Students", earlyBird: 360, final: 400, onspot: 450 },
        { category: "Non-Presenter/Attendee/Listener", earlyBird: 230, final: 250, onspot: 350 },
      ],
    },
  ];

  const participationFees2 = [
    {
      title: "Virtual (Online) Participants",
      categories: [
        { category: "Academicians/Delegates/Research Scholars/PhD candidates", earlyBird: 150, final: 200 },
        { category: "UG/PG Students", earlyBird: 100, final: 150 },
        { category: "Non-Presenter/Attendee/Listener", earlyBird: 90, final: 100 },
      ],
    },
  ];

  

  return (
    <div>
      <Hero
        title="Registration Fees"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/11.webp"
      />
      <section className="pt-10 md:pt-2">
        <DiscountConfetti />

        <div data-aos="fade-up" className="flex flex-col justify-center items-center text-center mt-5 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6">Registration</h2>
          <p className="w-11/12 font-medium">
            Welcome to the APCEESH-2026 registration page. Secure your spot at this premier
            conference to connect with global experts, present your research and advance your
            career. Follow the steps below to complete your registration.
          </p>
        </div>

        <div data-aos="fade-up" className="flex flex-col justify-center items-center p-5 gap-5 md:gap-10">
          <ConferenceCards />
        </div>

        <RegistrationSteps />

        {/* ── STEP 1: Fee Tables ── */}
        <div data-aos="fade-up" className="flex flex-col justify-center items-center pt-8">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">Registration Fees</h2>
          <p className="text-red-600 font-medium mb-4">
            *Note: Additional charges applicable for Scopus publication (T&amp;C Apply)
          </p>

          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-5 w-full">
            {participationFees1.map((fee, index) => (
              <table key={index} className="table-auto w-full border-collapse rounded-b-md shadow-xl">
                <caption className="bg-blue-900 text-white p-2 rounded-t-md font-bold text-md">
                  {fee.title}
                </caption>
                <thead>
                  <tr className="bg-blue-600 text-md text-white text-left">
                    <th className="border-r border-gray-200 p-4">Categories</th>
                    <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                    <th className="p-4 border-r border-gray-200">Final (USD)</th>
                    <th className="p-4">On Spot (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {fee.categories.map((item, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}>
                      <td className="border-r border-gray-200 p-4">
                        {item.category}
                        {["Students", "Students with Scopus Publication"].includes(item.category) && (
                          <span className="text-red-600">*</span>
                        )}
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <label >
                          <input  type="radio" name="price"
                            onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)}
                            value={item.earlyBird} className="mr-2" />
                          {item.earlyBird}
                        </label>
                      </td>
                      <td className="p-4 border-r border-gray-200">
                        <label>
                          <input type="radio" name="price"
                            onChange={() => handleBaseSelect(item.final, fee.title, item.category)}
                            value={item.final} className="mr-2" />
                          {item.final}
                        </label>
                      </td>
                      <td className="p-4">
                        <label>
                          <input type="radio" name="price"
                            onChange={() => handleBaseSelect(item.onspot, fee.title, item.category)}
                            value={item.onspot} className="mr-2" />
                          {item.onspot}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}

            {participationFees2.map((fee, index) => (
              <table key={index} className="table-auto w-full border-collapse rounded-b-md shadow-xl">
                <caption className="bg-blue-900 text-white p-2 rounded-t-md font-bold text-md">
                  {fee.title}
                </caption>
                <thead>
                  <tr className="bg-blue-600 text-md text-white text-left">
                    <th className="border-r border-gray-200 p-4">Categories</th>
                    <th className="border-r border-gray-200 p-4">Early Bird (USD)</th>
                    <th className="p-4">Final (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {fee.categories.map((item, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} text-sm font-[450]`}>
                      <td className="border-r border-gray-200 p-4">
                        {item.category}
                        {["Students", "Students with Scopus Publication"].includes(item.category) && (
                          <span className="text-red-600">*</span>
                        )}
                      </td>
                      <td className="border-r border-gray-200 p-4">
                        <label >
                          <input type="radio" name="price"
                            onChange={() => handleBaseSelect(item.earlyBird, fee.title, item.category)}
                            value={item.earlyBird} className="mr-2" />
                          {item.earlyBird}
                        </label>
                      </td>
                      <td className="p-4">
                        <label>
                          <input type="radio" name="price"
                            onChange={() => handleBaseSelect(item.final, fee.title, item.category)}
                            value={item.final} className="mr-2" />
                          {item.final}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>

          
        </div>

        <div className="text-red-500 md:px-12 mt-2">
          *Indicates - UG/PG students only (You have to submit a soft copy of your
          university/college identity card as a proof)
        </div>

        {/* ── STEP 2: Journal Publication Support ── */}
          <JournalSupport
            selectedJournal={selectedJournal}
            setSelectedJournal={setSelectedJournal}
          />

        {/* ── STEP 3: Add-ons ── */}
          <Addons
            selectedAddons={selectedAddons}
            setSelectedAddons={setSelectedAddons}
          />

        {/* ── STEP 4: Registration Form ── */}
        <div data-aos="fade-up" className="flex flex-col justify-center items-center mt-10 p-5 md:py-0">
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-2">Registration Form</h2>
          <p className="text-md font-medium mt-2">
            &quot;2<span className="text-sm align-super">nd</span> Asia Pacific Conference on Engineering,
            Education, Social Science and Humanities (APCEESH-2026)&quot;
          </p>

          <form
            ref={RegistrationFeeRef}
            onSubmit={HandleRegistration}
            className="text-sm p-2 md:p-6 flex flex-col md:flex-row justify-between md:gap-10 items-start shadow-md rounded-lg mt-8 md:w-11/12"
          >
            {/* Left: Form Fields (unchanged) */}
            <section className="w-full space-y-4 md:columns-2 gap-5" data-aos="fade-up">
              <div>
                <select className="w-full p-2.5 border border-gray-300 outline-none rounded-md" name="Title" defaultValue="">
                  <option value="" disabled>Select Title</option>
                  <option>Mr</option><option>Ms</option><option>Mrs</option>
                  <option>Dr</option><option>Prof</option>
                </select>
              </div>
              <div><input type="text" name="first_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="First Name" required /></div>
              <div><input type="text" name="last_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Last Name" required /></div>
              <div><input type="text" name="certificate_name" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Certificate Name" required /></div>
              <div>
                <label htmlFor="dateofbirth">Date of Birth:</label>
                <input id="dateofbirth" type="date" name="DOB" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" max="2020-01-01" required />
              </div>
              <div><input type="text" name="nationality" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Nationality" required /></div>
              <div><input type="text" name="department" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Department" required /></div>
              <div><input type="text" name="institution" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Institution" required /></div>
              <div><input type="tel" name="number" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="Mobile Number with Country Code" required /></div>
              <div><input type="email" name="email" className="w-full p-2.5 border border-gray-300 outline-none rounded-md" placeholder="E-mail" required /></div>
              <div>
                <select className="w-full p-2.5 border border-gray-300 outline-none rounded-md" name="participant_category"
                  value={participantCategory} onChange={(e) => setParticipantCategory(e.target.value)} required>
                  <option value="" disabled>Select Participant Category</option>
                  <option>Academicians</option><option>Delegates</option>
                  <option>Research scholars</option><option>Student</option>
                </select>
              </div>
              <div className="space-y-2">
                <span className="block font-medium">Presentation Category:</span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Category" value="oral" className="form-radio" /><span>Oral</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Category" value="poster" className="form-radio" /><span>Poster</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <span className="block font-medium">Presentation Type:</span>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Type" value="Virtual" className="form-radio" /><span>Virtual</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="presentation_Type" value="Physical" className="form-radio" /><span>Physical</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Right: Checkout Panel — now receives journal/addons props */}
            <div className="mt-6 md:mt-0 w-full md:w-auto">
              <CheckoutPanel
                pricing={pricing}
                baseSelected={!!selectedBase}
                participantCategory={participantCategory}
                membership={membership}
                onMembershipToggle={handleMembershipToggle}
                couponCode={couponCode}
                couponStatus={couponStatus}
                onCouponChange={setCouponCode}
                onCouponApply={handleCouponApply}
                onCouponRemove={handleCouponRemove}
                selectedJournal={selectedJournal}
                selectedAddons={selectedAddons}
                registrationBase={selectedBase?.value}
              />
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" name="Terms_and_Conditions" id="terms" className="w-4 h-4" value="on" />
                  <label htmlFor="terms" className="font-medium cursor-pointer text-sm">
                    I agree to the{" "}
                    <span className="text-blue-700 underline cursor-pointer">Terms and Conditions</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold text-base rounded-2xl hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                >
                  Check Out (Open Payment Gateway)
                </button>
                <p className="text-center text-gray-500 text-xs">
                  *Please note that the payee is responsible for all bank charges.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegistrationFee;