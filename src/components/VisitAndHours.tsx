import React from 'react';

export const VisitAndHours: React.FC = () => {
  // Opening hours: 9:00 AM - 9:00 PM
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 9 && currentHour < 21;

  return (
    <section className="py-20 bg-[#f6f3ed]/80 border-y border-[#d3c3bc]/30" id="visit">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
                Come Say Hello
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                  isOpen
                    ? 'bg-[#d5e9c5] text-[#101f09]'
                    : 'bg-[#ffdad6] text-[#93000a]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-red-600'
                  }`}
                />
                <span>{isOpen ? 'Open Now (Closes 9 PM)' : 'Opens 9:00 AM'}</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#261207] font-semibold">
              Visit &amp; Hours
            </h2>

            <p className="text-sm md:text-base text-[#50443f] leading-relaxed">
              Located in a quiet leafy lane in Bandra West, our doors are open daily for slow sips, morning bakes, and peaceful work hours.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#97472e] mt-1 text-xl">
                  location_on
                </span>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#261207]">
                    Address
                  </p>
                  <p className="text-xs md:text-sm text-[#50443f]">
                    123 Sample Street, Bandra West, Mumbai, Maharashtra 400050, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#97472e] mt-1 text-xl">
                  schedule
                </span>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#261207]">
                    Opening Hours
                  </p>
                  <p className="text-xs md:text-sm text-[#50443f]">
                    Monday – Sunday: 9:00 AM – 9:00 PM
                  </p>
                  <p className="text-xs text-[#97472e] font-medium mt-0.5">
                    Bake oven hot from 8:30 AM daily
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#97472e] mt-1 text-xl">
                  call
                </span>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#261207]">
                    Phone
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="text-xs md:text-sm text-[#50443f] hover:text-[#97472e] underline underline-offset-2 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="material-symbols-outlined text-[#97472e] mt-1 text-xl">
                  mail
                </span>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#261207]">
                    Email
                  </p>
                  <a
                    href="mailto:hello@solsticeandsage.example.com"
                    className="text-xs md:text-sm text-[#50443f] hover:text-[#97472e] underline underline-offset-2 transition-colors"
                  >
                    hello@solsticeandsage.example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Interactive Map Container */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#f0eee8] rounded-2xl border border-[#d3c3bc]/30 overflow-hidden shadow-md">
              <div className="h-96 w-full bg-[#ebe8e2] flex flex-col items-center justify-center p-8 relative overflow-hidden text-center">
                {/* Decorative Map Grid Lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#261207_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#97472e] text-white shadow-lg animate-bounce">
                    <span className="material-symbols-outlined text-3xl">pin_drop</span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#261207] font-bold">
                      Solstice &amp; Sage Café
                    </h3>
                    <p className="text-xs md:text-sm text-[#50443f]">
                      Bandra West, Mumbai
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Bandra+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#3d261a] text-[#fcf9f3] hover:bg-[#261207] px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-transform active:scale-95 shadow-sm cursor-pointer"
                  >
                    <span>Get Directions</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>

                {/* Map Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#fcf9f3]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#d3c3bc]/30 text-xs text-[#50443f] flex items-center justify-between flex-wrap gap-2">
                  <span>📍 Walking distance from Hill Road &amp; Carter Road</span>
                  <span className="text-[#97472e] font-semibold">Street Parking Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
