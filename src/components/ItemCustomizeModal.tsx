import React, { useState } from 'react';
import { MenuItem, CartItem } from '../types/cafe';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onConfirm: (cartItem: CartItem) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onConfirm,
}) => {
  const [milk, setMilk] = useState<'A2 Whole Milk' | 'Oat Milk (+₹30)' | 'Almond Milk (+₹30)' | 'None'>(
    'A2 Whole Milk'
  );
  const [sweetness, setSweetness] = useState<'Standard' | 'Less Sweet' | 'Unsweetened'>(
    'Standard'
  );
  const [temperature, setTemperature] = useState<'Hot' | 'Iced (+₹20)'>('Hot');
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  let unitPrice = item.price;
  if (milk === 'Oat Milk (+₹30)' || milk === 'Almond Milk (+₹30)') {
    unitPrice += 30;
  }
  if (temperature === 'Iced (+₹20)') {
    unitPrice += 20;
  }

  const handleAdd = () => {
    const cartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      item,
      quantity,
      options: {
        milk,
        sweetness,
        temperature,
      },
      totalPrice: unitPrice,
    };
    onConfirm(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#261207]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fcf9f3] rounded-2xl max-w-md w-full p-6 border border-[#d3c3bc]/40 shadow-2xl relative space-y-5 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#82746f] hover:text-[#261207] p-1 rounded-lg cursor-pointer"
        >
          ✕
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl font-semibold text-[#261207]">
              {item.name}
            </h3>
            {item.dietary && (
              <span className="text-[11px] font-semibold bg-[#d5e9c5] text-[#101f09] px-2 py-0.5 rounded-full">
                [{item.dietary}]
              </span>
            )}
          </div>
          <p className="text-xs text-[#50443f] leading-relaxed">{item.description}</p>
        </div>

        {/* Temperature Choice */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#261207]">Temperature</label>
          <div className="grid grid-cols-2 gap-2">
            {(['Hot', 'Iced (+₹20)'] as const).map((temp) => (
              <button
                key={temp}
                type="button"
                onClick={() => setTemperature(temp)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                  temperature === temp
                    ? 'border-[#97472e] bg-[#ffdbd0]/25 text-[#97472e]'
                    : 'border-[#d3c3bc]/40 bg-white text-[#50443f] hover:bg-[#f6f3ed]'
                }`}
              >
                {temp}
              </button>
            ))}
          </div>
        </div>

        {/* Milk Choice (only for beverages) */}
        {item.category === 'coffee' && (
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#261207]">Dairy &amp; Mylk</label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {(
                [
                  'A2 Whole Milk',
                  'Oat Milk (+₹30)',
                  'Almond Milk (+₹30)',
                  'None',
                ] as const
              ).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMilk(m)}
                  className={`p-2 rounded-xl border text-left transition-all cursor-pointer ${
                    milk === m
                      ? 'border-[#97472e] bg-[#ffdbd0]/25 text-[#261207] font-semibold'
                      : 'border-[#d3c3bc]/40 bg-white text-[#50443f] hover:bg-[#f6f3ed]'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sweetness */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#261207]">Sweetness Level</label>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {(['Unsweetened', 'Less Sweet', 'Standard'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSweetness(s)}
                className={`py-2 px-1 text-center rounded-xl border transition-all cursor-pointer ${
                  sweetness === s
                    ? 'border-[#97472e] bg-[#ffdbd0]/25 text-[#261207] font-semibold'
                    : 'border-[#d3c3bc]/40 bg-white text-[#50443f] hover:bg-[#f6f3ed]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity and Total */}
        <div className="pt-2 border-t border-[#d3c3bc]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-white border border-[#d3c3bc]/40 flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              -
            </button>
            <span className="font-semibold text-sm w-5 text-center tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-white border border-[#d3c3bc]/40 flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="bg-[#97472e] hover:bg-[#772f18] text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Add to Order</span>
            <span className="tabular-nums font-bold">· ₹{unitPrice * quantity}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
