import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description, link }) => {
  return (
    <a href={link} className="no-underline">
      <div className="border border-gray-300 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <img src={imageUrl} alt={title} className="w-full h-auto mb-2" />
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
