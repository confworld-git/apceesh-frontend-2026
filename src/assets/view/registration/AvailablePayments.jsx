import React from "react";
import { Helmet } from "react-helmet";
import { 
  CreditCard, 
  Building2, 
  Wallet, 
  ArrowRightLeft,
  CheckCircle2,
  Info,
  ShieldCheck,
  Copy,
  Download,
  Sparkles,
  BadgeCheck
} from "lucide-react";
import Hero from "../commonhero/common-hero";

const AvailablePayments = () => {
  const AvailablePaymentmethods = [
    {
      title: "Debit/Credit Card",
      icon: CreditCard,
      description: "Instant confirmation",
      features: ["Visa", "Mastercard", "Amex"],
      gradient: "from-blue-900 via-blue-800 to-blue-700",
      accentColor: "amber-400",
      // Credit card image URL
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80"
    },
    {
      title: "Net Banking",
      icon: Building2,
      description: "Secure bank transfer",
      features: ["All major banks", "NEFT/RTGS", "IMPS"],
      gradient: "from-amber-500 via-amber-400 to-yellow-400",
      accentColor: "blue-900",
      // Banking/financial building image
      image: "/images/reg-steps/online-pay.webp"
    },
    {
      title: "PayPal",
      icon: Wallet,
      description: "Global payments",
      features: ["Quick checkout", "Buyer protection", "Worldwide"],
      gradient: "from-blue-800 via-indigo-700 to-blue-900",
      accentColor: "amber-400",
      // Digital wallet/mobile payment image
      image: "/images/reg-steps/paypal.jfif"
    },
    {
      title: "Bank Transfer (TT)",
      icon: ArrowRightLeft,
      description: "International wire",
      features: ["SWIFT enabled", "Direct transfer", "Secure"],
      gradient: "from-amber-400 via-yellow-400 to-amber-500",
      accentColor: "blue-900",
      // International business/money transfer image
      image: "/images/reg-steps/bank.jpeg"
    },
  ];

  const BankDetails = [
    {
      title: "Beneficiary Name",
      value: "CONFWORLD EDUCATIONAL RESEARCH AND DEVELOPMENT ASSOCIATION",
      icon: CheckCircle2,
      canCopy: true
    },
    {
      title: "Bank Name",
      value: "HDFC Bank",
      icon: Building2,
      canCopy: false
    },
    {
      title: "Account Number",
      value: "50200097123575",
      icon: CreditCard,
      canCopy: true,
      highlight: true
    },
    {
      title: "IFSC Code",
      value: "HDFC0000124",
      icon: Info,
      canCopy: true,
      highlight: true
    },
    {
      title: "Swift Code",
      value: "HDFCINBBCHE",
      icon: Info,
      canCopy: true,
      highlight: true
    },
    {
      title: "Branch",
      value: "Kilpauk, Chennai, Tamil Nadu, India",
      icon: Building2,
      canCopy: false
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <section className="">
      <Hero
                          title="Available Payment Methods"
                          breadcrumbs={[{ label: "Home", link: "#" }]}
                          backgroundImage="/images/commonhero/12.webp"
            />
            <section className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-blue-50">
      

    

      {/* Payment Methods Section */}
      <div className=" px-4 py-4">
        <div className="text-center mb-8 pt-8">
          
          
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-6">
                  Choose Your Preferred Payment Method
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Select the option that works best for you
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AvailablePaymentmethods.map((item, index) => {
            const Icon = item.icon;
            const isAmberTheme = item.gradient.includes('amber');
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-amber-400 transform hover:-translate-y-2"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  {/* Actual Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  {/* Dark Bottom Gradient for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge in Corner */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`w-14 h-14 rounded-xl ${
                      isAmberTheme 
                        ? 'bg-blue-900 shadow-lg shadow-blue-900/50' 
                        : 'bg-amber-400 shadow-lg shadow-amber-400/50'
                    } flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      <Icon className={`w-7 h-7 ${isAmberTheme ? 'text-amber-400' : 'text-blue-900'}`} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                      <BadgeCheck className="w-4 h-4 text-white" />
                      <span className="text-xs font-semibold text-white">Verified</span>
                    </div>
                  </div>

                  {/* Bottom Shine Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2 group-hover:text-amber-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Animated Bottom Bar */}
                <div className="h-2 bg-gradient-to-r from-blue-800 to-blue-800 transform group-hover:scale-x-0 scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Security Badge */}
        <div className="mt-8 ">
          <div className="bg-gradient-to-r from-blue-900/5 to-amber-400/5 border-2 border-blue-800/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-10 h-10 text-amber-400" strokeWidth={2} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-blue-900 mb-2">
                  Bank-Grade Security
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  All transactions are encrypted with 256-bit SSL technology. Your payment information 
                  is never stored on our servers and is processed through certified payment gateways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 py-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative  mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-400/30 mb-6">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
                Direct Bank Transfer
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bank Account <span className="text-amber-400">Details</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Use the following information for wire transfers
            </p>
          </div>
      
          {/* Bank Details Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Premium Header */}
              <div className="relative h-3 bg-gradient-to-r from-blue-800 via-amber-400 via-50% to-blue-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
              
              <div className="p-8 md:p-12">
                {/* Bank Logo/Header Area */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 pb-8 border-b-2 border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-amber-400" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">HDFC Bank</h3>
                      <p className="text-slate-600 text-sm">International Banking Partner</p>
                    </div>
                  </div>
                 
                </div>

                {/* Bank Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {BankDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`group relative rounded-2xl p-6 transition-all duration-300 ${
                          item.highlight 
                            ? 'bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-400/50 shadow-md hover:shadow-lg' 
                            : 'bg-gradient-to-br from-slate-50 to-blue-50/30 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                      >
                        {/* Icon in Corner */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${
                            item.highlight 
                              ? 'bg-gradient-to-br from-amber-400 to-amber-500' 
                              : 'bg-gradient-to-br from-blue-800 to-blue-900'
                          }`}>
                            <Icon className={`w-6 h-6 ${item.highlight ? 'text-blue-900' : 'text-amber-400'}`} strokeWidth={2} />
                          </div>
                          {item.canCopy && (
                            <button
                              onClick={() => copyToClipboard(item.value)}
                              className="p-2 rounded-lg bg-white/50 hover:bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 group/copy"
                              title="Copy to clipboard"
                            >
                              <Copy className="w-4 h-4 text-slate-600 group-hover/copy:text-blue-600" />
                            </button>
                          )}
                        </div>

                        {/* Content */}
                        <div>
                          <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2 opacity-70">
                            {item.title}
                          </div>
                          <div className={`font-bold break-words leading-relaxed ${
                            item.highlight ? 'text-blue-900 text-lg' : 'text-slate-800 text-base'
                          }`}>
                            {item.value}
                          </div>
                        </div>

                        {/* Highlight indicator */}
                        {item.highlight && (
                          <div className="absolute top-3 right-3">
                            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>
    </section>
    
  );
};

export default AvailablePayments;