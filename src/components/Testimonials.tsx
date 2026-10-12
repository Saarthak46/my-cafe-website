import React, { useState } from 'react';
import { CustomerReview } from '../types/cafe';
import { TESTIMONIALS } from '../data/cafeData';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const initials = name
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const newReview: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Café Patron',
      initials,
      badgeColor: 'bg-[#ffdbd0] text-[#3a0a00]',
      rating,
      comment: comment.trim(),
      date: 'Just now',
    };

    setReviews([newReview, ...reviews]);
    setShowReviewModal(false);
    setName('');
    setRole('');
    setComment('');
    setToastMessage('Thank you for sharing your kind words!');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-xl mx-auto mb-14">
        <span className="text-xs font-semibold text-[#97472e] tracking-widest uppercase">
          Community Voices
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-[#261207] mt-2 font-semibold">
          Echoes From Our Sunny Corner
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl border border-[#d3c3bc]/30 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="flex text-[#97472e] text-sm">
                {[...Array(item.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base text-[#50443f] italic leading-relaxed">
                &ldquo;{item.comment}&rdquo;
              </p>
            </div>

            <div className="pt-6 border-t border-[#d3c3bc]/20 flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.badgeColor}`}
              >
                {item.initials}
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-[#261207]">
                  {item.name}
                </p>
                <p className="text-xs text-[#50443f]">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Community Engagement Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowReviewModal(true)}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#261207] hover:text-[#97472e] border border-[#d3c3bc]/60 bg-white px-5 py-2.5 rounded-xl shadow-2xs hover:border-[#97472e] transition-all cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-base">edit_note</span>
          <span>Share Your Corner Memory</span>
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#261207] text-[#fcf9f3] px-5 py-3 rounded-xl shadow-lg text-sm flex items-center gap-2 animate-slideUp">
          <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-[#261207]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fcf9f3] rounded-2xl max-w-md w-full p-6 border border-[#d3c3bc]/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-[#261207]">
                Share a Note of Warmth
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-[#82746f] hover:text-[#261207] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4 text-xs md:text-sm">
              <div className="space-y-1">
                <label className="block text-[#261207] font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[#261207] font-medium">Neighborhood / Role</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Pali Hill Regular"
                  className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[#261207] font-medium">Star Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="cursor-pointer text-xl text-[#97472e]"
                    >
                      <span
                        className="material-symbols-outlined text-xl"
                        style={{
                          fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0",
                        }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[#261207] font-medium">Your Thoughts *</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What was your favorite sip, bake, or seat at the hearth?"
                  className="w-full bg-white border border-[#d3c3bc]/40 rounded-xl px-3 py-2 text-[#261207] focus:outline-none focus:ring-1 focus:ring-[#97472e]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 rounded-xl text-[#50443f] hover:bg-[#f0eee8] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#261207] text-white px-5 py-2 rounded-xl font-semibold cursor-pointer"
                >
                  Post Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
