import React, { useEffect, useRef } from 'react';

const tags = [
  'Node JS Developers', 'Databases', 'Robotics', 'Aerospace',
  'Flutter Developers', 'Boston', 'Front End Developers', 'Web3',
  'Blockchain', 'iOS Developers', 'Hardware', 'Seattle',
  'Cyber Security', 'E-commerce', 'React Developers', 'Artificial Intelligence',
  'Saas', 'Vue Js Developers', 'Austin', 'Software', 'Aerospace',
  'New York', 'Full Stack Developers', 'Python Developers', 'Java Developers'
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const bubbleRefs = useRef([]);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const offsets = useRef([]);
  const floatAngles = useRef([]);

  useEffect(() => {
    offsets.current = tags.map(() => ({ x: 0, y: 0 }));
    floatAngles.current = tags.map(() => Math.random() * Math.PI * 2);

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      bubbleRefs.current.forEach((el, i) => {
        if (!el) return;

        const intensity = 80 + (i % 5) * 20;

        floatAngles.current[i] += 0.01 + (i % 3) * 0.002;
        const floatX = Math.sin(floatAngles.current[i]) * 5;
        const floatY = Math.cos(floatAngles.current[i]) * 5;

        offsets.current[i].x = lerp(offsets.current[i].x, (mouse.current.x - 0.5) * intensity, 0.2);
        offsets.current[i].y = lerp(offsets.current[i].y, (mouse.current.y - 0.5) * intensity, 0.2);

        const x = offsets.current[i].x + floatX;
        const y = offsets.current[i].y + floatY;

        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) / rect.width;
      mouse.current.y = (e.clientY - rect.top) / rect.height;
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div data-aos="fade-right"
      ref={containerRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Hero Title */}
      <div className="text-center pt-[160px] relative z-10">
        <h1 className="text-[48px] md:text-[60px] lg:text-[80px] font-black text-[#0a0f0d] leading-[1.2]">
          <span className="text-[#0a0f0d]">W</span>
          <span className="text-[#f43f5e] font-black">:</span>{' '}
          Find what’s <span className="text-[#f43f5e]">next</span>
        </h1>
      </div>

      {/* Floating Tags */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {tags.map((text, i) => (
          <span
            key={i}
            ref={(el) => bubbleRefs.current[i] = el}
            className="absolute px-4 py-2 bg-white rounded-lg shadow-lg text-sm text-gray-700 
           transition-all duration-300 ease-out transform pointer-events-auto
           hover:scale-110 hover:brightness-125 hover:shadow-pink-200 hover:shadow-xl
           hover:bg-pink-50 hover:text-pink-600 cursor-pointer"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
