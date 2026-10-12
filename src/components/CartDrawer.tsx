import React, { useState } from 'react';
import { CartItem } from '../types/cafe';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    total: number;
    estimatedMinutes: number;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const finalTotal = subtotal + gst;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const orderId = `SS-${Math.floor(100 + Math.random() * 900)}`;
    setConfirmedOrder({
      orderId,
      total: finalTotal,
      estimatedMinutes: orderType === 'takeaway' ? 12 : 18,
    });
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#261207]/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#fcf9f3] h-full shadow-2xl flex flex-col justify-between border-l border-[#d3c3bc]/40 animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#d3c3bc]/30 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#97472e] text-2xl">
              shopping_bag
            </span>
            <h3 className="font-serif text-xl font-semibold text-[#261207]">
              Your Order Bag
            </h3>
          </div>
          <button
            onClick={() => {
              setConfirmedOrder(null);
              onClose();
            }}
            className="p-1.5 rounded-lg text-[#50443f] hover:text-[#261207] hover:bg-[#f0eee8] cursor-pointer"
          >
            ✕
          </button>
        </div>

        {confirmedOrder ? (
          /* Order Confirmation View */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d5e9c5] text-[#101f09] flex items-center justify-center text-3xl shadow-sm">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#261207]">
              Order Dialed In!
            </h4>
            <p className="text-sm text-[#50443f] max-w-xs">
              Order <span className="font-bold text-[#261207]">#{confirmedOrder.orderId}</span> is being prepared with reverence at our barista bar.
            </p>
            <div className="p-4 bg-white rounded-xl border border-[#d3c3bc]/30 w-full text-left space-y-2 text-xs">
              <div className="flex justify-between text-[#50443f]">
                <span>Fulfillment:</span>
                <span className="font-semibold text-[#261207] capitalize">{orderType}</span>
              </div>
              <div className="flex justify-between text-[#50443f]">
                <span>Ready in:</span>
                <span className="font-semibold text-[#97472e]">
                  ~{confirmedOrder.estimatedMinutes} minutes
                </span>
              </div>
              <div className="flex justify-between text-[#50443f]">
                <span>Total Paid:</span>
                <span className="font-semibold text-[#261207]">₹{confirmedOrder.total}</span>
              </div>
            </div>
            <p className="text-xs text-[#82746f] italic">
              Please collect at the wooden pick-up counter when called.
            </p>
            <button
              onClick={() => {
                setConfirmedOrder(null);
                onClose();
              }}
              className="w-full bg-[#261207] text-white py-3 rounded-xl text-sm font-semibold cursor-pointer shadow-sm mt-4"
            >
              Done &amp; Return
            </button>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Bag */
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-3">
            <span className="material-symbols-outlined text-4xl text-[#82746f]">
              local_cafe
            </span>
            <p className="font-serif text-lg text-[#261207] font-medium">Your bag is empty</p>
            <p className="text-xs text-[#50443f] max-w-xs leading-relaxed">
              Explore our single-origin brews, dawn laminated bakes, and sourdough toasts to begin.
            </p>
            <button
              onClick={onClose}
              className="mt-2 text-xs font-semibold text-[#97472e] underline cursor-pointer"
            >
              Browse Craft Menu →
            </button>
          </div>
        ) : (
          /* Populated Cart Items */
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Dine-in vs Takeaway Toggle */}
            <div className="grid grid-cols-2 p-1 bg-[#ebe8e2] rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setOrderType('dine-in')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  orderType === 'dine-in'
                    ? 'bg-white text-[#261207] shadow-2xs'
                    : 'text-[#50443f] hover:text-[#261207]'
                }`}
              >
                Dine-in Hearth
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  orderType === 'takeaway'
                    ? 'bg-white text-[#261207] shadow-2xs'
                    : 'text-[#50443f] hover:text-[#261207]'
                }`}
              >
                Takeaway
              </button>
            </div>

            {/* Items List */}
            <div className="space-y-3">
              {cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="bg-white p-3.5 rounded-xl border border-[#d3c3bc]/30 shadow-2xs flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-serif text-sm font-semibold text-[#261207] truncate">
                        {cartItem.item.name}
                      </h4>
                      {cartItem.item.dietary && (
                        <span className="text-[10px] text-[#50443f] bg-[#f0eee8] px-1 rounded">
                          [{cartItem.item.dietary}]
                        </span>
                      )}
                    </div>
                    {cartItem.options && (
                      <p className="text-[11px] text-[#82746f] truncate mt-0.5">
                        {[
                          cartItem.options.temperature,
                          cartItem.options.milk,
                          cartItem.options.sweetness,
                        ]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                    )}
                    <span className="text-xs font-bold text-[#97472e] tabular-nums mt-1 block">
                      ₹{cartItem.totalPrice * cartItem.quantity}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1.5 shrink-0 bg-[#f6f3ed] p-1 rounded-lg">
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, -1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-xs text-[#261207] hover:bg-white cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center tabular-nums">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(cartItem.id, 1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-xs text-[#261207] hover:bg-white cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(cartItem.id)}
                    className="text-[#82746f] hover:text-[#ba1a1a] p-1 text-sm cursor-pointer"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Optional Customer Note */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-[#261207] mb-1">
                Barista or Hearth Note:
              </label>
              <input
                type="text"
                placeholder="e.g. Extra hot, oat milk in latte..."
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#97472e]"
              />
            </div>
          </div>
        )}

        {/* Drawer Footer with Calculation & Place Order */}
        {!confirmedOrder && cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#d3c3bc]/30 space-y-4">
            <div className="space-y-1.5 text-xs text-[#50443f]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="tabular-nums font-medium text-[#261207]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5%):</span>
                <span className="tabular-nums font-medium text-[#261207]">₹{gst}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#f0eee8] text-sm font-bold text-[#261207]">
                <span>Total:</span>
                <span className="tabular-nums text-[#97472e]">₹{finalTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#97472e] hover:bg-[#772f18] text-white py-3.5 rounded-xl text-sm font-semibold transition-transform active:scale-95 shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Place Order (Pay at Bar)</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
