/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem, CartItem } from './types/cafe';
import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PatronFavorites } from './components/PatronFavorites';
import { CraftMenu } from './components/CraftMenu';
import { BrewGuidesSection } from './components/BrewGuidesSection';
import { OurStory } from './components/OurStory';
import { Testimonials } from './components/Testimonials';
import { VisitAndHours } from './components/VisitAndHours';
import { ContactAndReserve } from './components/ContactAndReserve';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [orderToast, setOrderToast] = useState<string | null>(null);

  // Add an item directly to the cart
  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (c) => c.item.id === item.id && !c.options
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prevCart,
        {
          id: `${item.id}-${Date.now()}`,
          item,
          quantity: 1,
          totalPrice: item.price,
        },
      ];
    });

    setOrderToast(`Added ${item.name} to order bag`);
    setTimeout(() => setOrderToast(null), 3000);
  };

  // Add customized item from modal
  const handleAddCustomizedItem = (cartItem: CartItem) => {
    setCart((prevCart) => [...prevCart, cartItem]);
    setOrderToast(`Added ${cartItem.item.name} to order bag`);
    setTimeout(() => setOrderToast(null), 3000);
  };

  // Quantity updater
  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((ci) => {
          if (ci.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((ci) => ci.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenuSpecials = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#1c1c18] flex flex-col font-sans selection:bg-[#ffdbd0] selection:text-[#3a0a00]">
      {/* 1. Seasonal Top Notice Banner */}
      <TopBanner onExploreSpecials={scrollToMenuSpecials} />

      {/* 2. Top Navigation Bar */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Patron Favorites Bento Showcase */}
        <PatronFavorites
          onAddToCart={handleAddToCart}
          onCustomizeItem={(item) => setCustomizingItem(item)}
        />

        {/* 5. Seasonal Craft Menu */}
        <CraftMenu
          onAddToCart={handleAddToCart}
          onCustomizeItem={(item) => setCustomizingItem(item)}
        />

        {/* 6. Tasting Matrix & Dialed-in Brew Guides */}
        <BrewGuidesSection />

        {/* 7. Our Story / Slow Living Philosophy */}
        <OurStory />

        {/* 8. Community Voices Testimonials */}
        <Testimonials />

        {/* 9. Visit & Opening Hours with Map */}
        <VisitAndHours />

        {/* 10. Reserve & Contact Inquiries */}
        <ContactAndReserve />
      </main>

      {/* 11. Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Slide-out Order Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Beverage Customization Modal */}
      <ItemCustomizeModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onConfirm={handleAddCustomizedItem}
      />

      {/* Subtle Toast when items are added */}
      {orderToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#261207] text-[#fcf9f3] px-4 py-2.5 rounded-xl shadow-lg text-xs md:text-sm font-medium flex items-center gap-2 border border-[#d3c3bc]/20 animate-fadeIn">
          <span className="material-symbols-outlined text-[#ffb59f] text-base">
            check_circle
          </span>
          <span>{orderToast}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#ffdbd0] underline text-xs font-semibold cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}
    </div>
  );
}
