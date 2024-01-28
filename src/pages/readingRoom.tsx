import React from 'react';
import Card from '@/components/Card';

const ReadingRoom = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card
        title="My Readings"
        imageUrl="/myreadings.png"
        description="Access all your readings here."
        link="/my-readings" // Update the link to the correct path for your application
      />
      <Card
        title="My Notes"
        imageUrl="/mynotes.png"
        description="View and manage your notes."
        link="/my-notes" // Update the link to the correct path for your application
      />
      <Card
        title="Request a Reading"
        imageUrl="/requestareading.png"
        description="Request a new reading from our experts."
        link="/request-a-reading" // Update the link to the correct path for your application
      />
      <Card
        title="Shop"
        imageUrl="/shop.png"
        description="Browse our collection of books and other items."
        link="/shop" // Update the link to the correct path for your application
      />
    </div>
  );
};

export default ReadingRoom;
