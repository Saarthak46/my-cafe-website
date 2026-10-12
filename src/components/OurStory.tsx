import React, { useState } from 'react';
import { CAFE_IMAGES } from '../data/cafeData';

export const OurStory: React.FC = () => {
  const [showEstateModal, setShowEstateModal] = useState(false);

  return (
    <section className="py-20 bg-[#ebe8e2]/40 border-t border-[#d3c3bc]/30" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Visual */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden border border-[#d3c3bc]/30 p-2 bg-white shadow-lg">
              <img
                src={CAFE_IMAGES.storyBakes}
                alt="Close up view of artisanal pastries including flaky croissants and cinnamon swirl buns arranged gracefully on a wooden café counter beside warm morning sunlight and a gentle baker preparing dough."
                className="w-full h-[380px] sm:h-[460px] object-cover rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Founder Oath Floating Badge */}
            <div className="absolute -bottom-6 -right-4 hidden sm:block bg-white p-6 rounded-2xl shadow-md border border-[#d3c3bc]/30 max-w-xs">
              <p className="font-serif text-base text-[#261207] font-semibold italic">
                &ldquo;Reverence for the bean and patience for the crust.&rdquo;
              </p>
              <p className="text-xs text-[#97472e] mt-2 font-medium">
                — Founder&apos;s Oath
              </p>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
              The Solstice Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#261207] leading-tight font-semibold">
              Rooted in Slow Living &amp; Ethical Stewardship
            </h2>

            <p className="text-sm md:text-base text-[#50443f] leading-relaxed">
              Solstice &amp; Sage was born from a desire to press pause on the hurried rhythm of urban life. We source our coffee beans directly from legacy shade-grown estates in the lush hills of Chikmagalur and Coorg, ensuring honest fair wages for smallholder farmers and preserving vital biodiversity under ancient forest canopies.
            </p>

            <p className="text-sm md:text-base text-[#50443f] leading-relaxed">
              At the crack of dawn, our bakery fires up to craft sourdoughs using stoneground organic flours, natural wild yeasts, and slow overnight fermentation. Every cup and plate served is an invitation to slow down, share a table, and savor handcrafted warmth.
            </p>

            {/* 3 Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#f0eee8] border border-[#d3c3bc]/20">
                <span className="material-symbols-outlined text-[#97472e] text-2xl mb-1">
                  handshake
                </span>
                <h5 className="font-serif text-sm font-semibold text-[#261207]">
                  Direct Farm Trade
                </h5>
                <p className="text-xs text-[#50443f] mt-1">
                  Ethical prices paid directly to Chikmagalur estates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0eee8] border border-[#d3c3bc]/20">
                <span className="material-symbols-outlined text-[#97472e] text-2xl mb-1">
                  grain
                </span>
                <h5 className="font-serif text-sm font-semibold text-[#261207]">
                  Stone-ground Flours
                </h5>
                <p className="text-xs text-[#50443f] mt-1">
                  100% whole heirloom grains milled naturally.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0eee8] border border-[#d3c3bc]/20">
                <span className="material-symbols-outlined text-[#97472e] text-2xl mb-1">
                  nest_eco_leaf
                </span>
                <h5 className="font-serif text-sm font-semibold text-[#261207]">
                  Zero Single-Use
                </h5>
                <p className="text-xs text-[#50443f] mt-1">
                  Compostable packaging and clay ceramic serveware.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowEstateModal(true)}
                className="text-xs md:text-sm font-semibold text-[#97472e] hover:text-[#261207] underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
                type="button"
              >
                <span>Read our 2024 Shade Canopy Sourcing Charter</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estate Charter Modal */}
      {showEstateModal && (
        <div className="fixed inset-0 z-50 bg-[#261207]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf9f3] rounded-2xl max-w-lg w-full p-6 md:p-8 border border-[#d3c3bc]/40 shadow-xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#d5e9c5] text-[#101f09] flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">eco</span>
                </span>
                <h3 className="font-serif text-xl text-[#261207] font-semibold">
                  Shade Canopy Sourcing Charter
                </h3>
              </div>
              <button
                onClick={() => setShowEstateModal(false)}
                className="p-1 rounded-lg text-[#50443f] hover:text-[#261207] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-xs md:text-sm text-[#50443f] space-y-3 leading-relaxed">
              <p>
                Our coffee partners cultivate Arabica under a two-tier natural rainforest canopy. By protecting over 40 native tree species per hectare, our partner farms provide sanctuary for migratory birds, flying squirrels, and wild honeybees.
              </p>
              <div className="p-3 bg-white rounded-xl border border-[#d3c3bc]/30 space-y-1.5">
                <p className="font-semibold text-[#261207]">Fair Trade Premium Guarantee:</p>
                <p className="text-xs text-[#50443f]">
                  We pay 42% above market terminal rates directly to farm collectives in Mudigere and Sakleshpur, funding local health clinics and ecological watershed preservation.
                </p>
              </div>
              <p>
                All coffee cherry pulp and used espresso grounds from Solstice &amp; Sage are composted into natural fertilizer for community urban gardens across Mumbai.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowEstateModal(false)}
                className="bg-[#261207] text-white px-5 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                type="button"
              >
                Close Charter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
