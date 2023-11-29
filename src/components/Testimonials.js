import React from "react";

export default function Testimonials() {
  // Replace the following placeholders with your actual testimonials
  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit id odio nec laoreet.",
    },
    {
      name: "Jane Smith",
      text: "Suspendisse potenti. Praesent facilisis quam vel venenatis. Curabitur mattis turpis ut urna lacinia.",
    },
    {
      name: "Alice Johnson",
      text: "Vivamus at elit sit amet nunc egestas vestibulum ac vel turpis. Aenean nec viverra libero.",
    },
  ];

  return (
    <section className="my-20 text-center">
      <h2 className="text-4xl font-bold mb-8 text-white">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg border border-white text-white">
            <p className="mb-4">{testimonial.text}</p>
            <p className="text-xl font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
