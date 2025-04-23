import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.",
  },
  {
    text: "I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.",
  },
  {
    text: "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    text: "As a recruiter, I’ve found more qualified candidates on Wellfound than any other platform.",
  },
  {
    text: "The interface is clean, intuitive, and makes the hiring process incredibly efficient.",
  },
  {
    text: "Thanks to Wellfound, I discovered my dream role and joined a company I truly care about.",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const totalCards = testimonials.length;
  const cardWidth = 400 + 24; // card width + gap (Tailwind mx-3 = 24px total)

  const canPrev = index > 0;
  const canNext = index < totalCards - visibleCount;

  const prev = () => {
    if (canPrev) setIndex(index - 1);
  };

  const next = () => {
    if (canNext) setIndex(index + 1);
  };

  return (
    <section className="px-4 md:px-12 py-10">
      <h2 className="text-xl font-semibold mb-2 text-gray-600">Quotes</h2>
      <h1 className="text-4xl font-bold mb-6">From our users</h1>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
              width: `${totalCards * cardWidth}px`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[400px] shrink-0 bg-pink-50 p-6 rounded-xl shadow-sm mx-3"
              >
                <div className="bg-pink-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                  <Quote className="text-pink-600" />
                </div>
                <p className="text-lg text-gray-800">{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow buttons */}
        <div className="absolute -top-4 right-0 flex gap-4 mt-4">
          <button
            onClick={prev}
            disabled={!canPrev}
            className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow ${
              canPrev ? "bg-white hover:bg-gray-50" : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow ${
              canNext ? "bg-white hover:bg-gray-50" : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
