 import React from "react";
 function FeatureCards() {
    const cards = [
      {
        title: "Get Featured",
        heading: "Let us show you off",
        description:
          "Apply to be featured and let the opportunities come to you. We'll highlight your profile to top recruiters and companies searching for your skills.\n\nOh, it's also 100% free.",
        link: "Learn more",
        bg: "bg-yellow-400",
        textColor: "text-black",
        linkColor: "text-black",
      },
      {
        title: "Salary Calculator",
        heading: "Know your worth",
        description:
          "We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.",
        link: "Calculate",
        bg: "bg-purple-900",
        textColor: "text-white",
        linkColor: "text-white",
      },
    ];
  
    return (
      <section className="flex flex-wrap gap-6 justify-center p-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} ${card.textColor} rounded-2xl p-8 w-full md:w-[500px] flex flex-col justify-between`}
          >
            <div>
              <p className="font-semibold mb-2">{card.title}</p>
              <h2 className="text-4xl font-bold mb-6">{card.heading}</h2>
              <p className="text-base whitespace-pre-line">{card.description}</p>
            </div>
            <div className="mt-8 text-right font-semibold">
              <a href="#" className={`${card.linkColor}`}>
                {card.link}
              </a>
            </div>
          </div>
        ))}
      </section>
    );
  }

  export default FeatureCards
  