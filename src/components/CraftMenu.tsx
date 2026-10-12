import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types/cafe';
import { MENU_ITEMS } from '../data/cafeData';

interface CraftMenuProps {
  onAddToCart: (item: MenuItem) => void;
  onCustomizeItem?: (item: MenuItem) => void;
  selectedCategoryProp?: string;
}

export const CraftMenu: React.FC<CraftMenuProps> = ({
  onAddToCart,
  onCustomizeItem,
  selectedCategoryProp,
}) => {
  const [activeTab, setActiveTab] = useState<'coffee' | 'tea' | 'pastries' | 'meals'>(
    (selectedCategoryProp as any) || 'coffee'
  );
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'V' | 'VG'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'tea', label: 'Tea & Botanicals' },
    { id: 'pastries', label: 'Pastries & Bakes' },
    { id: 'meals', label: 'Light Meals' },
  ] as const;

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match (or all if search query is active)
      const matchesCategory = searchQuery.trim() !== '' ? true : item.category === activeTab;
      
      // Dietary filter match
      const matchesDietary =
        dietaryFilter === 'all'
          ? true
          : dietaryFilter === 'V'
          ? item.dietary === 'V' || item.dietary === 'VG'
          : item.dietary === 'VG';

      // Search query match
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tastingNotes &&
          item.tastingNotes.some((note) =>
            note.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeTab, dietaryFilter, searchQuery]);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12" id="menu">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
          The Daily Hearth
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#261207] mt-2 font-semibold">
          Seasonal Craft Menu
        </h2>
        <p className="text-sm md:text-base text-[#50443f] mt-3 leading-relaxed">
          Every beverage is dialed-in on our manual lever machines and pour stations. All pastries and breads are baked fresh twice daily.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id && !searchQuery.trim();
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSearchQuery('');
                }}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#261207] text-[#fcf9f3] shadow-xs'
                    : 'bg-[#ebe8e2] text-[#1c1c18] hover:bg-[#e5e2dc]'
                }`}
                type="button"
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dietary and Search Row */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Dietary Selector */}
          <div className="flex items-center gap-1 bg-[#ebe8e2] p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                dietaryFilter === 'all'
                  ? 'bg-white text-[#261207] font-semibold shadow-2xs'
                  : 'text-[#50443f] hover:text-[#261207]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('V')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                dietaryFilter === 'V'
                  ? 'bg-white text-[#261207] font-semibold shadow-2xs'
                  : 'text-[#50443f] hover:text-[#261207]'
              }`}
            >
              [V] Veg
            </button>
            <button
              onClick={() => setDietaryFilter('VG')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                dietaryFilter === 'VG'
                  ? 'bg-white text-[#261207] font-semibold shadow-2xs'
                  : 'text-[#50443f] hover:text-[#261207]'
              }`}
            >
              [VG] Vegan
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative flex-1 md:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search flavor or item..."
              className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/40 rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#1c1c18] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-sm text-[#82746f]">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-xs text-[#82746f] hover:text-[#261207]"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Menu Items */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#d3c3bc]/30">
          <span className="material-symbols-outlined text-3xl text-[#82746f] mb-2">coffee</span>
          <p className="text-[#50443f] text-sm">No items found matching your filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setDietaryFilter('all');
            }}
            className="mt-3 text-xs text-[#97472e] underline font-medium cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="menu-items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group bg-white p-5 rounded-2xl border transition-all duration-150 hover:shadow-xs flex justify-between items-start gap-4 ${
                item.isSeasonal
                  ? 'border-[#fe997a]/50 bg-gradient-to-br from-white to-[#ffdbcb]/15'
                  : 'border-[#d3c3bc]/30'
              }`}
            >
              <div className="space-y-1.5 pr-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-serif text-base md:text-lg font-semibold text-[#261207]">
                    {item.name}
                  </h4>
                  {item.dietary && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                        item.dietary === 'VG'
                          ? 'bg-[#203018] text-[#d5e9c5]'
                          : 'bg-[#d5e9c5] text-[#101f09]'
                      }`}
                    >
                      [{item.dietary}]
                    </span>
                  )}
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-md bg-[#fe997a]/20 text-[#793019] text-[10px] font-bold tracking-wide">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs md:text-sm text-[#50443f] leading-relaxed">
                  {item.description}
                </p>

                {/* Tasting Notes pill tags if available */}
                {item.tastingNotes && item.tastingNotes.length > 0 && (
                  <div className="pt-1 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] text-[#82746f] italic">Notes:</span>
                    {item.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="text-[11px] text-[#50443f] bg-[#f0eee8] px-2 py-0.5 rounded-md"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price and Add Action */}
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-sm md:text-base font-bold text-[#97472e] tabular-nums">
                  ₹{item.price}
                </span>

                <button
                  onClick={() => {
                    if (item.category === 'coffee' && onCustomizeItem) {
                      onCustomizeItem(item);
                    } else {
                      onAddToCart(item);
                    }
                  }}
                  aria-label={`Add ${item.name} to order`}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f0eee8] text-[#261207] hover:bg-[#97472e] hover:text-white transition-colors cursor-pointer group-hover:scale-105 active:scale-95"
                  title="Add to order"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
