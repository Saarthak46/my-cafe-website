import React from 'react';
import { MenuItem } from '../types/cafe';
import { PATRON_FAVORITES } from '../data/cafeData';

interface PatronFavoritesProps {
  onAddToCart: (item: MenuItem) => void;
  onCustomizeItem?: (item: MenuItem) => void;
}

export const PatronFavorites: React.FC<PatronFavoritesProps> = ({
  onAddToCart,
  onCustomizeItem,
}) => {
  return (
    <section className="py-16 bg-[#f6f3ed]/60 border-y border-[#d3c3bc]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
              Patron Favorites
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#261207] mt-1 font-semibold">
              Morning Rituals &amp; Signature Treats
            </h2>
          </div>
          <p className="text-sm text-[#50443f] max-w-md">
            Curated everyday staples crafted with shade-grown estate beans, slow fermentation sourdough, and grass-fed dairy butter.
          </p>
        </div>

        {/* Bento-style Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATRON_FAVORITES.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-3 border border-[#d3c3bc]/30 shadow-xs flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative rounded-xl overflow-hidden h-48 mb-4 bg-[#f0eee8]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {item.dietaryLabel && (
                    <span
                      className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-xs ${
                        item.dietary === 'VG'
                          ? 'bg-[#203018] text-[#d5e9c5]'
                          : 'bg-[#d5e9c5] text-[#101f09]'
                      }`}
                    >
                      {item.dietaryLabel}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="px-2">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-lg font-semibold text-[#261207]">
                      {item.name}
                    </h3>
                    <span className="text-base font-bold text-[#97472e] tabular-nums">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#50443f] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Tag & Add Action */}
              <div className="px-2 pt-4 mt-2 border-t border-[#f0eee8] flex items-center justify-between gap-2">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#f0eee8] text-[#50443f] text-xs font-medium">
                  {item.badge}
                </span>

                <button
                  onClick={() => {
                    if (item.category === 'coffee' && onCustomizeItem) {
                      onCustomizeItem(item);
                    } else {
                      onAddToCart(item);
                    }
                  }}
                  className="inline-flex items-center gap-1 bg-[#3d261a] hover:bg-[#261207] text-[#fcf9f3] px-3 py-1.5 rounded-lg text-xs font-semibold active:scale-95 transition-all shadow-2xs cursor-pointer"
                  title="Add item to your order bag"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
