"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, Info, Send, Phone, DollarSign } from "lucide-react"; // Correct icon name for PaperPlane
import ThemeToggleButton from "./ThemeToggleButton";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home className="inline-block mr-1" /> },
    {
      href: "/#about",
      label: "About",
      icon: <Info className="inline-block mr-1" />,
    },
    {
      href: "/#wings",
      label: "Wings",
      icon: <Send className="inline-block mr-1" />,
    },
    {
      href: "/invest",
      label: "Invest",
      icon: <DollarSign className="inline-block mr-1" />,
    },
    {
      href: "/#contact",
      label: "Contact",
      icon: <Phone className="inline-block mr-1" />,
    },
  ];

  return (
    <nav className=" bg-white  dark:bg-slate-900 text-black/75 dark:text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 text-xl font-bold dark:hidden">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Tabseer logo"
                  width={160}
                  height={32}
                />
              </Link>
            </div>
            <div className="flex-shrink-0 text-xl font-bold hidden dark:block">
              <Link href="/">
                <Image
                  src="/logo-white.svg"
                  alt="Tabseer logo"
                  width={160}
                  height={32}
                />
              </Link>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mobile Hamburger Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Show Hamburger icon when the menu is closed */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Show Cross (X) icon when the menu is open
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Right: Theme Toggle Button (visible on desktop) */}
          <div className="hidden sm:block sm:ml-6">
            <ThemeToggleButton />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
