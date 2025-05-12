import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import tempLogo from "@public/images/brand-logo.svg";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#whatistempmail", label: "What is Temp Mail?" },
  { href: "/#whyusetempmail", label: "Features" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNonHomeActive = navItems.some(
    (item) =>
      item.href !== "/" &&
      (location.pathname + location.hash === item.href || location.pathname === item.href)
  );

  return (
    <header className="sticky w-full top-0 bg-white z-20 py-6 shadow-sm">
      <div className="container">
        <nav className="flex justify-between items-center relative">
          {/* Brand Logo */}
          <div className="brand-logo">
            <a href="/">
              <img src={tempLogo} className="w-full max-w-[200px]" alt="logo" />
            </a>
          </div>

          {/* Toggle Button - Visible on Mobile */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu />}
          </button>

          {/* Navigation Menu */}
          <div
            className={`lg:static lg:translate-x-0 lg:flex lg:items-center lg:bg-transparent lg:shadow-none lg:w-auto lg:h-auto ${
              !menuOpen ? "translate-x-full" : "translate-x-0"
            } fixed top-[77.48px] right-0 w-64 bg-white z-[1] h-screen text-center shadow-lg font-semibold transform transition-transform duration-300 ease-in-out`}
          >
            <ul className="flex items-center flex-col lg:flex-row">
              {navItems.map((item) => (
                <li key={item.href} className="py-2 lg:py-0 lg:px-4">
                  <a
                    href={item.href}
                    className={`hover:text-primary-foreground transition-all duration-300 ${
                      item.href === "/" && location.pathname === "/" && !isNonHomeActive
                        ? "text-primary-foreground"
                        : item.href !== "/" &&
                          (location.pathname + location.hash === item.href ||
                            location.pathname === item.href)
                        ? "text-primary-foreground"
                        : "text-black"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
