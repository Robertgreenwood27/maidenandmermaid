import React from "react";

export default function TarotSection() {
  return (
    <section className="my-20 text-center">
      <h2 className="text-4xl font-bold mb-8">Explore the Tarot</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Tarot Card 1 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg border border-white text-white">
          <h3 className="text-xl font-semibold mb-4">Card Title 1</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit id odio nec laoreet.
          </p>
        </div>

        {/* Tarot Card 2 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg border border-white text-white">
          <h3 className="text-xl font-semibold mb-4">Card Title 2</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit id odio nec laoreet.
          </p>
        </div>

        {/* Tarot Card 3 */}
        <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg border border-white text-white">
          <h3 className="text-xl font-semibold mb-4">Card Title 3</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit id odio nec laoreet.
          </p>
        </div>

        {/* Add more tarot cards as needed */}
      </div>
    </section>
  );
}
