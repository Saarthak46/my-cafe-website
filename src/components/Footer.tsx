import React from 'react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenPrivacyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ebe8e2] border-t border-[#d3c3bc]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-serif text-2xl font-semibold text-[#261207] flex items-center gap-2"
            >
              <span className="w-7 h-7 rounded-full bg-[#97472e] text-white flex items-center justify-center text-sm shadow-xs">
                <span className="material-symbols-outlined text-base">local_cafe</span>
              </span>
              <span>Solstice &amp; Sage Café</span>
            </a>
            <p className="text-sm text-[#50443f] max-w-sm leading-relaxed">
              An independent neighborhood café dedicated to shade-grown estates, heritage wild grains, and everyday quiet elegance.
            </p>
            <div className="flex items-center gap-4 text-[#50443f] pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Follow:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#97472e] transition-colors text-xs font-medium"
              >
                @solsticeandsage
              </a>
            </div>
          </div>

          {/* Nav links columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <p className="font-serif text-sm font-semibold text-[#261207] mb-3">
                Explore
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <a href="#menu" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Ethical Sourcing
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenReservation}
                    className="text-[#50443f] hover:text-[#261207] transition-colors text-left cursor-pointer"
                  >
                    Table Queue
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-serif text-sm font-semibold text-[#261207] mb-3">
                Community
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <a href="#contact" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Private Gatherings
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Brew Guides
                  </a>
                </li>
                <li>
                  <a href="#visit" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Contact &amp; Locations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-serif text-sm font-semibold text-[#261207] mb-3">
                Ethics
              </p>
              <ul className="space-y-2 text-xs md:text-sm">
                <li>
                  <a href="#about" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#50443f] hover:text-[#261207] transition-colors">
                    Sustainability Deck
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-[#d3c3bc]/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#50443f]">
          <p>© 2024 Solstice &amp; Sage Café. Handcrafted with reverence and slow living.</p>
          <div className="flex items-center gap-6">
            <a
              href="#top"
              onClick={scrollToTop}
              className="hover:text-[#97472e] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>Back to top</span>
              <span className="material-symbols-outlined text-sm">arrow_upward</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
