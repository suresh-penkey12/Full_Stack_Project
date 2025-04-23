import React from 'react';

const companyLogos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/AdonisJS_logo.png', alt: 'Adonis Logo' },
  { src: 'https://seeklogo.com/images/C/consensys-logo-89D62C7282-seeklogo.com.png', alt: 'Consensys Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Cruise_logo_2022.svg', alt: 'Cruise Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/DoorDash_Logo.svg', alt: 'Doordash Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Roblox_Logo_2022.svg', alt: 'Roblox Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Honey_logo.svg', alt: 'Honey Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Peloton_Interactive_logo.svg', alt: 'Peloton Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/IFTTT_Logo.svg', alt: 'IFTTT Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Postmates_logo.svg', alt: 'Postmates Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Plaid_logo.svg', alt: 'Plaid Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Airtable_Logo.svg', alt: 'Airtable Logo' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/NerdWallet_Logo.svg', alt: 'Nerdwallet Logo' },
];

const CompanyLogosSection = () => {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          More than 25K companies have used Wellfound to build their team
        </p>
        <div className="mt-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8 items-center justify-items-center">
          {companyLogos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 lg:h-8 transition-transform duration-300 grayscale hover:grayscale-0 hover:scale-105 p-1 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogosSection;
