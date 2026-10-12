import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [partySize, setPartySize] = useState(2);
  const [seatingArea, setSeatingArea] = useState('Sunny Window Nook');
  const [specialNote, setSpecialNote] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '01:00 PM',
    '03:30 PM',
    '05:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  const seatingOptions = [
    { title: 'Sunny Window Nook', desc: 'Natural light & leafy street view' },
    { title: 'Communal Hearth', desc: 'Warm oak bench near the roastery' },
    { title: 'Leafy Patio', desc: 'Open-air botanical garden seating' },
    { title: 'Quiet Library Corner', desc: 'Peaceful nook for reading & focus' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;

    const code = `TBL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#261207]/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#fcf9f3] rounded-2xl max-w-lg w-full p-6 md:p-8 border border-[#d3c3bc]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-[#82746f] hover:text-[#261207] p-1 rounded-lg cursor-pointer"
        >
          ✕
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
                Table Hospitality
              </span>
              <h3 className="font-serif text-2xl text-[#261207] font-semibold">
                Reserve Your Corner Table
              </h3>
              <p className="text-xs text-[#50443f]">
                We hold tables for 15 minutes past reservation time. No cover charge.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[#261207] font-semibold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Sharma"
                    className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[#261207] font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 00000"
                    className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[#261207] font-semibold">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maya@example.com"
                  className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                />
              </div>

              {/* Date & Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-[#261207] font-semibold">Reservation Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-[#261207] font-semibold">Party Size</label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e] cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest (Solo Sips)' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slot Picker */}
              <div className="space-y-1.5">
                <label className="block text-[#261207] font-semibold">Select Time Slot</label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        timeSlot === slot
                          ? 'bg-[#261207] text-white shadow-2xs'
                          : 'bg-white text-[#50443f] border border-[#d3c3bc]/30 hover:border-[#97472e]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Area Preference */}
              <div className="space-y-1.5">
                <label className="block text-[#261207] font-semibold">Seating Nook Preference</label>
                <div className="grid grid-cols-2 gap-2">
                  {seatingOptions.map((opt) => (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => setSeatingArea(opt.title)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        seatingArea === opt.title
                          ? 'border-[#97472e] bg-[#ffdbd0]/20'
                          : 'border-[#d3c3bc]/30 bg-white hover:bg-[#f6f3ed]'
                      }`}
                    >
                      <p className="font-semibold text-xs text-[#261207]">{opt.title}</p>
                      <p className="text-[10px] text-[#50443f] mt-0.5">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="block text-[#261207] font-semibold">Special Notes (Optional)</label>
                <input
                  type="text"
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="e.g. Anniversary celebration, near plug point..."
                  className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#97472e] hover:bg-[#772f18] text-white py-3 rounded-xl font-semibold transition-transform active:scale-95 shadow-sm cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmed State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d5e9c5] text-[#101f09] mx-auto flex items-center justify-center text-3xl shadow-sm">
              <span className="material-symbols-outlined text-3xl">event_available</span>
            </div>
            <h3 className="font-serif text-2xl text-[#261207] font-semibold">
              Table Reserved!
            </h3>
            <p className="text-xs md:text-sm text-[#50443f] max-w-sm mx-auto">
              We look forward to welcoming you, <span className="font-bold text-[#261207]">{name}</span>.
              A confirmation SMS has been prepared for your phone.
            </p>

            <div className="bg-white p-4 rounded-xl border border-[#d3c3bc]/30 max-w-xs mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#82746f]">Reservation Code:</span>
                <span className="font-bold text-[#97472e]">{bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#82746f]">Date &amp; Time:</span>
                <span className="font-medium text-[#261207]">{date} at {timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#82746f]">Party:</span>
                <span className="font-medium text-[#261207]">{partySize} guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#82746f]">Area:</span>
                <span className="font-medium text-[#261207]">{seatingArea}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#261207] text-white px-8 py-2.5 rounded-xl text-sm font-semibold cursor-pointer shadow-sm mt-4"
            >
              Close &amp; Back to Café
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
