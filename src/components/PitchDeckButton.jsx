import React from 'react';

const PitchDeckButton = () => {
  const isProduction = import.meta.env.PROD;
  const pitchDeckUrl = isProduction
    ? 'https://www.hermeias.org/pitchdeck.pdf'
    : '/pitchdeck.pdf';

  const glowStyle = {
    textShadow: '0 0 6px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)',
  };

  return (
    <a
      href={pitchDeckUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-300 ease-in-out border-2 border-white/40 rounded-full group hover:border-white hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-black/50 backdrop-blur-xl"
    >
      <span 
        className="transition-all duration-300 ease-in-out group-hover:[text-shadow:0_0_8px_rgba(255,255,255,1),_0_0_16px_rgba(255,255,255,0.8)]"
        style={glowStyle}
      >
        Pitch Deck
      </span>
    </a>
  );
};

export default PitchDeckButton;
