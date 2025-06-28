import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "News", href: "#news" },
];


  return (
    <header className="bg-[#f2f9ff] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold">
          <span className="text-blue-600">Medi</span>
          <span className="text-orange-400">Care+</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-4 text-[18px] font-medium">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-[18px] py-2 px-6 rounded-full transition-all">
            Contact
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 focus:outline-none text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-6 space-y-4 text-[18px] font-medium shadow-md">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block w-full text-center px-4 py-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button className="w-full bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-[18px] py-2 rounded-full transition-all">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

