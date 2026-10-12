import React from 'react';

interface TopBannerProps {
  onExploreSpecials: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onExploreSpecials }) => {
  return (
    <div className="bg-[#3d261a] text-[#f6f3ed] px-4 py-2.5 text-center text-xs md:text-sm font-medium tracking-wide relative z-40 border-b border-[#261207]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center text-[#ffb59f]">
          <span className="material-symbols-outlined text-base mr-1">eco</span>
        </span>
        <span>🍂 Autumn Seasonal Special: Warm up with our Spiced Cinnamon Hazelnut Latte &amp; Fresh Fig Tart — Available this month only!</span>
        <button
          onClick={onExploreSpecials}
          className="underline underline-offset-4 font-semibold text-[#ffdbd0] hover:text-white ml-1 transition-colors cursor-pointer"
        >
          Explore Specials →
        </button>
      </div>
    </div>
  );
};
