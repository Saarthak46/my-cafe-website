import React from 'react';
import { CAFE_IMAGES } from '../data/cafeData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d5e9c5]/50 text-[#3b4b31] border border-[#b9cdaa]/60 text-xs font-semibold tracking-wide">
              <span className="material-symbols-outlined text-sm">potted_plant</span>
              <span>Boutique Roastery &amp; Sourdough Kitchen</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] text-[#261207] tracking-tight font-semibold">
              Your Little Corner of Comfort
            </h1>

            <p className="text-lg text-[#50443f] max-w-xl leading-relaxed">
              Slow-roasted specialty beans, morning pastries baked in-house from scratch, and an open hearth for quiet conversations and neighborly warmth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#261207] text-[#fcf9f3] hover:bg-[#3d261a] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 active:scale-[0.98] shadow-sm cursor-pointer"
              >
                <span>View Menu</span>
                <span className="material-symbols-outlined text-base">restaurant_menu</span>
              </a>

              <a
                href="#visit"
                className="inline-flex items-center gap-2 border border-[#261207] text-[#261207] hover:bg-[#261207]/5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                <span>Find Us</span>
                <span className="material-symbols-outlined text-base">location_on</span>
              </a>
            </div>

            {/* Proof Metrics */}
            <div className="pt-8 border-t border-[#d3c3bc]/40 grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-serif text-2xl md:text-3xl text-[#261207] font-semibold">100%</p>
                <p className="text-xs md:text-sm text-[#50443f] mt-0.5">Single-Origin Arabica</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-[#261207] font-semibold">05:30 AM</p>
                <p className="text-xs md:text-sm text-[#50443f] mt-0.5">Daily Dawn Bake</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl text-[#261207] font-semibold">Chikmagalur</p>
                <p className="text-xs md:text-sm text-[#50443f] mt-0.5">Shade-Grown Estate</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#d3c3bc]/30 bg-[#f6f3ed] p-2">
              <img
                src={CAFE_IMAGES.hero}
                alt="Sunlit cozy artisanal coffee shop interior with exposed brick walls, rich wooden tables, lush hanging ferns and golden morning light pouring through paned windows."
                className="w-full h-[380px] sm:h-[460px] object-cover rounded-xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Atmospheric Badges */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-lg shadow-sm border border-[#d3c3bc]/30 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#97472e] animate-pulse"></span>
                <span className="text-xs text-[#261207] font-medium tracking-wide">
                  100% Single-Origin Arabica
                </span>
              </div>

              <div className="absolute bottom-6 right-6 bg-[#3d261a]/95 text-[#fcf9f3] backdrop-blur-md px-4 py-2.5 rounded-lg shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdbd0] text-lg">bakery_dining</span>
                <span className="text-xs md:text-sm font-medium">Fresh Daily Bakes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
