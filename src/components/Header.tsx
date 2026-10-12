import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#about' },
    { label: 'Visit & Hours', href: '#visit' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf9f3]/95 backdrop-blur-md border-b border-[#d3c3bc]/40 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-[#261207] flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-full bg-[#97472e] text-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-lg">local_cafe</span>
          </span>
          <span>Solstice &amp; Sage Café</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[#97472e] border-b-2 border-[#97472e] pb-1 font-semibold text-sm transition-colors whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-[#50443f] hover:text-[#261207] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-[#50443f] hover:text-[#261207] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
          >
            Our Story
          </a>
          <a
            href="#visit"
            className="text-[#50443f] hover:text-[#261207] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
          >
            Visit &amp; Hours
          </a>
          <a
            href="#contact"
            className="text-[#50443f] hover:text-[#261207] transition-colors duration-200 text-sm font-medium whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Trailing Actions */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="p-2 text-[#50443f] hover:text-[#261207] transition-colors relative cursor-pointer rounded-lg hover:bg-[#f0eee8]"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#97472e] text-white text-[11px] font-bold flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center justify-center bg-[#3d261a] text-[#fcf9f3] hover:bg-[#261207] px-5 py-2.5 rounded-xl text-sm font-semibold active:scale-[0.98] transition-all duration-150 shadow-xs cursor-pointer whitespace-nowrap"
            type="button"
          >
            Reserve a Table
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#261207] focus:outline-none cursor-pointer rounded-lg hover:bg-[#f0eee8]"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f3] border-t border-[#d3c3bc]/30 px-6 py-5 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-medium transition-colors ${
                  link.label === 'Home' ? 'text-[#97472e] font-semibold' : 'text-[#50443f] hover:text-[#261207]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#d3c3bc]/30 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full inline-flex items-center justify-center bg-[#97472e] text-white py-3 rounded-xl text-sm font-semibold active:scale-95 transition-transform"
                type="button"
              >
                Reserve a Table
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full inline-flex items-center justify-center bg-[#f0eee8] text-[#261207] py-2.5 rounded-xl text-sm font-semibold border border-[#d3c3bc]/40"
                type="button"
              >
                View Order Bag ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
