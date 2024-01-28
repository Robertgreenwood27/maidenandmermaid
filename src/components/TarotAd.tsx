import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import { auth } from "src/firebase/firebaseClient"; 

export default function TarotAd() {
  const [user, userLoading] = useAuthState(auth);
  const router = useRouter();

  if (userLoading) return <h1>Loading...</h1>;

  const handleTarotLinkClick = () => {
    if (!user) {
      router.push('/signIn');
    } else {
      router.push('/readingRoom');
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center">
        <img 
          src="/access.png" 
          alt="Access the Reading Room" 
          className="cursor-pointer hover:opacity-90" 
          onClick={handleTarotLinkClick}
          style={{ maxWidth: '300px', maxHeight: '300px' }} // Adjust size as needed
        />
      </div>
    </div>
  );
}
