// components/Navigation/Navigation.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuMenu, LuX } from "react-icons/lu";
import { navigationData } from "./navigationData";
import "./Navigation.css";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <nav className="bg-blue-800 fixed top-6 lg:top-18 left-0 right-0 z-40 py-3 px-4 ">
        <div className="w-full flex items-center justify-between">
          <a href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src="/images/logo/apceesh-logo.png"
              alt="APCEESH Conference Logo"
              className="h-12  lg:h-16 w-auto max-w-[180px] lg:max-w-[210px]"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navigationData.map((item, index) => (
              <div key={index} className="relative group">
                {item.title === "Login" ? (
                  <a
                    href={item.path}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-blue-800 bg-amber-400 hover:bg-amber-500 transition-colors duration-500"
                  >
                    {item.title}
                  </a>
                ) : item.path ? (
                  <a
                    href={item.path}
                    className={`flex items-center space-x-1 px-3 py-1 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.children && (
                      <RiArrowDropDownLine className="text-lg group-hover:rotate-180 transition-transform duration-500" />
                    )}
                  </a>
                ) : (
                  <div className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white cursor-pointer group-hover:text-amber-400 transition-colors duration-200">
                    <span>{item.title}</span>
                    {item.children && (
                      <RiArrowDropDownLine className="text-lg group-hover:rotate-180 transition-transform duration-500" />
                    )}
                  </div>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0  w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out transform group-hover:translate-y-0 -translate-y-2 z-50 overflow-hidden border border-gray-100">
                    <div className="py-2">
                      {item.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.path}
                          className={`block px-5 py-3.5 text-sm font-medium transition-all duration-200 relative group/item ${
                            location.pathname === child.path
                              ? "bg-gradient-to-r from-blue-800 to-blue-700 text-white"
                              : "text-gray-700 hover:bg-amber-50 hover:text-blue-800"
                          }`}
                        >
                          <span className="relative z-10">{child.title}</span>
                          {location.pathname === child.path && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400"></span>
                          )}
                          {location.pathname !== child.path && (
                            <span className="absolute left-0 top-0 bottom-0 w-0 bg-amber-400 group-hover/item:w-1 transition-all duration-200"></span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-amber-400 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b bg-blue-800 border-amber-400">
          <img
            src="/images/logo/apceesh-logo.png"
            alt="APCEESH Logo"
            className="h-10 w-auto"
          />
          <button
            onClick={closeMobileMenu}
            className="p-1 text-white hover:text-amber-400"
            aria-label="Close menu"
          >
            <LuX size={20} />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {navigationData.map((item, index) => (
            <div key={index}>
              {item.title === "Login" ? (
                <a
                  href={item.path}
                  onClick={closeMobileMenu}
                  className="block mx-4 my-2 px-6 py-3 text-center text-base font-semibold rounded-md text-blue-800 bg-amber-400 hover:bg-amber-500 border-2 border-amber-400 transition-colors duration-200"
                >
                  {item.title}
                </a>
              ) : item.path ? (
                <a
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-800 text-amber-400 border-l-4 border-l-amber-400"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  }`}
                >
                  {item.title}
                </a>
              ) : (
                <div className="px-6 py-4 text-base font-semibold text-blue-800 bg-amber-50 border-b border-amber-200">
                  {item.title}
                </div>
              )}

              {item.children && (
                <div className="bg-blue-50 border-b-2 border-blue-200">
                  {item.children.map((child, childIndex) => (
                    <a
                      key={childIndex}
                      href={child.path}
                      onClick={closeMobileMenu}
                      className={`block px-8 py-3 text-sm border-l-2 border-transparent transition-colors duration-200 ${
                        location.pathname === child.path
                          ? "bg-blue-800 text-amber-400 font-medium border-l-amber-400"
                          : "text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-l-blue-800"
                      }`}
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}