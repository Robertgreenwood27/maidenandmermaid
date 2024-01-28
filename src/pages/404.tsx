// pages/404.js

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => (
  <div
    className="min-h-screen bg-cover bg-center flex items-center justify-center"
    style={{
      backgroundImage: 'url(/mystical-background.png)', // Replace with your own background image
    }}
  >
    <div className="bg-black bg-opacity-70 p-6 rounded-lg text-white text-center">
      <h1 className="text-4xl font-bold mb-2">404 - The Mysterious Void</h1>
      <p className="text-lg mb-4">
        Oh no! You&apos;ve stumbled into the uncharted territory of our tarot world. This mystical page is yet to be foreseen by our tarot cards.
      </p>
      <p className="text-lg">
        Fear not, for your path is clear. Return to the <Link href="/">sanctuary of our home page</Link> and continue your tarot journey.
      </p>
    </div>
  </div>
);

export default NotFoundPage;
