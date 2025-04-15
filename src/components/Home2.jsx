import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home2= () => {
  const navigate=useNavigate();
  const handleClick = (section) => {
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <div className="flex h-screen w-full gap-4 p-4 bg-gray-900">
  {/* First Div */}
  <div
    className="flex-1 bg-cover bg-center cursor-pointer hover:opacity-90 transition rounded-2xl shadow-lg overflow-hidden"
    style={{ backgroundImage: "url('/Mega.svg')" }}
    onClick={() => handleClick('mega')}
  >
  </div>

  {/* Second Div */}
  <div
    className="flex-1 bg-cover bg-center cursor-pointer hover:opacity-90 transition rounded-2xl shadow-lg overflow-hidden"
    style={{ backgroundImage: "url('/NonTech.svg')" }}
    onClick={() => handleClick('nontech')}
  >
  </div>

  {/* Third Div */}
  <div
    className="flex-1 bg-cover bg-center cursor-pointer hover:opacity-90 transition rounded-2xl shadow-lg overflow-hidden"
    style={{ backgroundImage: "url('/Technical.svg')" }}
    onClick={() => handleClick('tech')}
  >
  </div>
</div>

  );
};

export default Home2;
