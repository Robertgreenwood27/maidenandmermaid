import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const customFontStyle = {
    fontFamily: 'Blackletter, sans-serif', // Using the Blackletter font
  };

  return (
    <div className="text-center" style={customFontStyle}>
      <Link href="/" legacyBehavior>
        <a>
          <Image src="/maidenandmermaid.png" alt="Maiden and Mermaid Logo" width={200} height={200} />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
