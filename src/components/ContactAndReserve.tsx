import React, { useState } from 'react';

export const ContactAndReserve: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'reservation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'reservation',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <section className="py-20 max-w-4xl mx-auto px-6 md:px-12" id="contact">
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
          Reserve &amp; Inquire
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#261207] font-semibold">
          Get in Touch
        </h2>
        <p className="text-sm md:text-base text-[#50443f] max-w-lg mx-auto leading-relaxed">
          Have a question about single-origin batches, want to reserve an intimate table, or booking a private cupping session? Send us a note.
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#d3c3bc]/30 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6" id="cafe-contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#261207]" htmlFor="name">
                Full Name <span className="text-[#97472e]">*</span>
              </label>
              <input
                className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/40 rounded-xl px-4 py-3 text-sm text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#97472e]/40 focus:border-[#97472e] transition-all"
                id="name"
                placeholder="e.g. Maya Sharma"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-[#261207]" htmlFor="email">
                Email Address <span className="text-[#97472e]">*</span>
              </label>
              <input
                className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/40 rounded-xl px-4 py-3 text-sm text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#97472e]/40 focus:border-[#97472e] transition-all"
                id="email"
                placeholder="e.g. maya@example.com"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#261207]" htmlFor="inquiry_type">
              Inquiry Type
            </label>
            <select
              className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/40 rounded-xl px-4 py-3 text-sm text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#97472e]/40 focus:border-[#97472e] transition-all cursor-pointer"
              id="inquiry_type"
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            >
              <option value="reservation">Table Reservation</option>
              <option value="general">General Question</option>
              <option value="events">Private Event / Catering Inquiry</option>
              <option value="workshop">Brewing Workshop Inquiry</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-[#261207]" htmlFor="message">
              Your Note or Reservation Details <span className="text-[#97472e]">*</span>
            </label>
            <textarea
              className="w-full bg-[#f6f3ed] border border-[#d3c3bc]/40 rounded-xl px-4 py-3 text-sm text-[#1c1c18] focus:outline-none focus:ring-2 focus:ring-[#97472e]/40 focus:border-[#97472e] transition-all resize-y"
              id="message"
              placeholder="Tell us about your requested date, party size, or specific questions..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div>
            <button
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#97472e] text-white hover:bg-[#97472e]/90 px-8 py-3.5 rounded-xl text-sm font-semibold transition-transform active:scale-95 shadow-sm cursor-pointer disabled:opacity-50"
              id="submit-btn"
              type="submit"
              disabled={loading}
            >
              <span>{loading ? 'Sending...' : 'Send Message'}</span>
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>

          {/* Demo Mode Disclaimer */}
          <p className="text-xs text-[#50443f]/80 pt-3 border-t border-[#d3c3bc]/20 italic">
            Demo mode: Connect to Formspree, EmailJS, or your backend API to receive live submissions.
          </p>

          {/* Dynamic Success Toast */}
          {submitted && (
            <div className="p-4 rounded-xl bg-[#d5e9c5] text-[#101f09] flex items-center gap-3 animate-fadeIn">
              <span className="material-symbols-outlined text-xl">check_circle</span>
              <p className="text-sm font-medium">
                Thank you! Your message has been received. We will respond within 4 business hours.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
