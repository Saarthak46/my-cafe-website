import React, { useState } from 'react';
import { BREW_GUIDES } from '../data/cafeData';

export const BrewGuidesSection: React.FC = () => {
  const [selectedGuideIndex, setSelectedGuideIndex] = useState(0);
  const activeGuide = BREW_GUIDES[selectedGuideIndex];

  return (
    <section className="py-16 bg-[#f0eee8]/60 border-t border-[#d3c3bc]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
              The Artisan Laboratory
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#261207] mt-1 font-semibold">
              Dialed-In Brew Guides &amp; Tasting Matrix
            </h2>
          </div>
          <p className="text-sm text-[#50443f] max-w-md">
            Our baristas share the exact parameters we calibrate every morning for single-origin extraction.
          </p>
        </div>

        {/* Interactive Method Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Method Stepper List */}
          <div className="lg:col-span-4 space-y-3">
            {BREW_GUIDES.map((guide, idx) => {
              const isSelected = selectedGuideIndex === idx;
              return (
                <button
                  key={guide.method}
                  onClick={() => setSelectedGuideIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#97472e] shadow-xs'
                      : 'bg-white/60 hover:bg-white border-[#d3c3bc]/30 text-[#50443f]'
                  }`}
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-serif text-base font-semibold ${
                        isSelected ? 'text-[#97472e]' : 'text-[#261207]'
                      }`}
                    >
                      {guide.method}
                    </h3>
                    <span className="material-symbols-outlined text-sm text-[#82746f]">
                      {isSelected ? 'expand_more' : 'chevron_right'}
                    </span>
                  </div>
                  <p className="text-xs text-[#50443f] mt-1">{guide.tagline}</p>
                </button>
              );
            })}

            {/* Quick Origin Matrix Card */}
            <div className="p-4 rounded-xl bg-white border border-[#d3c3bc]/30 mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#97472e] text-lg">local_florist</span>
                <span className="font-serif text-sm font-semibold text-[#261207]">
                  Shade Estate Terroir
                </span>
              </div>
              <p className="text-xs text-[#50443f] leading-relaxed">
                Grown at 1,250m elevation under wild silver oak, fig, and pepper vine canopies in Chikmagalur. The slow bean maturation locks in crisp natural sweetness and floral acidity.
              </p>
              <div className="flex items-center gap-1.5 flex-wrap pt-1">
                <span className="text-[11px] bg-[#d5e9c5]/60 text-[#101f09] px-2 py-0.5 rounded-full font-medium">
                  SLN-79 Washed
                </span>
                <span className="text-[11px] bg-[#ffdbcb]/60 text-[#2b160b] px-2 py-0.5 rounded-full font-medium">
                  Rainforest Canopy
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Brewing Parameters Spec Sheet */}
          <div className="lg:col-span-8 bg-white p-6 md:p-8 rounded-2xl border border-[#d3c3bc]/30 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#f0eee8] gap-2">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#261207] font-semibold">
                  {activeGuide.method}
                </h3>
                <p className="text-xs text-[#97472e] mt-0.5 font-medium">
                  Recommended Lot: {activeGuide.recommendedBeans}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0eee8] text-xs font-semibold text-[#261207] shrink-0">
                <span className="material-symbols-outlined text-sm text-[#97472e]">timer</span>
                <span>{activeGuide.brewTime} total brew</span>
              </span>
            </div>

            {/* 4 Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 bg-[#f6f3ed] rounded-xl text-center">
                <span className="text-[11px] text-[#82746f] uppercase tracking-wider block">
                  Ratio
                </span>
                <span className="font-serif text-base font-bold text-[#261207]">
                  {activeGuide.ratio}
                </span>
              </div>
              <div className="p-3 bg-[#f6f3ed] rounded-xl text-center">
                <span className="text-[11px] text-[#82746f] uppercase tracking-wider block">
                  Grind
                </span>
                <span className="font-serif text-base font-bold text-[#261207]">
                  {activeGuide.grindSize}
                </span>
              </div>
              <div className="p-3 bg-[#f6f3ed] rounded-xl text-center">
                <span className="text-[11px] text-[#82746f] uppercase tracking-wider block">
                  Water Temp
                </span>
                <span className="font-serif text-base font-bold text-[#261207]">
                  {activeGuide.waterTemp}
                </span>
              </div>
              <div className="p-3 bg-[#f6f3ed] rounded-xl text-center">
                <span className="text-[11px] text-[#82746f] uppercase tracking-wider block">
                  Target Time
                </span>
                <span className="font-serif text-base font-bold text-[#261207]">
                  {activeGuide.brewTime}
                </span>
              </div>
            </div>

            {/* Steps Sequence */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-semibold text-[#261207] uppercase tracking-wider">
                Step-by-Step Dial
              </h4>
              <ol className="space-y-2.5 text-xs md:text-sm text-[#50443f]">
                {activeGuide.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#f0eee8] text-[#97472e] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
