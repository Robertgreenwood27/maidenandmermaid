import React from 'react';
import TarotAd from '@/components/TarotAd';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-4">
        <TarotAd />
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-semibold mb-2">Welcome to Our Tarot World</h1>
          <p className="text-lg mb-4">
            Dive into the mystical world of tarot readings where ancient wisdom meets modern insight. At Maiden and Mermaid Tarot, we are dedicated to providing you with a unique and enlightening tarot experience.
          </p>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <p className="text-lg mb-4">
            Our team of experienced tarot readers is here to offer you guidance and answers to life's questions. Explore our range of tarot readings, including love, career, and personal growth. Whether you're a seasoned tarot enthusiast or new to this spiritual journey, we have something for everyone.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
          <p className="text-lg mb-4">
            We pride ourselves on our accuracy, compassion, and dedication to helping you find clarity and insight. Our tarot readings are personalized, and our team is committed to providing you with the best possible experience on your path to self-discovery.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Get Started</h2>
          <p className="text-lg mb-4">
            Ready to embark on your tarot journey? Click the "Access the Reading Room" button above to explore our tarot readings. Whether you seek answers, guidance, or simply a moment of reflection, our tarot readings await you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
