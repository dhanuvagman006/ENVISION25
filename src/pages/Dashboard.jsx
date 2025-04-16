

const ProfileCard = () => (
  <div className="relative w-full max-w-md p-6 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-lg border border-white/10 transform hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-[#0f0f0f]/80 to-[#1a1a1a]/90 text-white">
    {/* Gradient Circles */}
    <svg
      className="absolute inset-0 w-full h-full z-0"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="radial" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#ff5e5e" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#6a0dad" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
        </radialGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
        </filter>
      </defs>
      <circle cx="100" cy="80" r="90" fill="url(#radial)" filter="url(#blur)" />
      <circle cx="320" cy="300" r="120" fill="url(#radial)" filter="url(#blur)" />
    </svg>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center space-y-4">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="avatar"
        className="w-24 h-24 rounded-full border-4 border-white/70 shadow-lg hover:scale-105 transition-transform duration-300"
      />

      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        PRATHAM P SHETTY
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-4 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition">
          Show QR
        </button>
        <button className="px-4 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition">
          Certificates
        </button>
      </div>

      <button className="mt-4 bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-full font-semibold shadow-lg hover:from-red-500 hover:to-red-600">
        Logout
      </button>

      <div className="text-left w-full mt-6 space-y-3 text-sm bg-white/5 p-4 rounded-xl">
        <p><span className="font-semibold text-gray-300">Name:</span> PRATHAM P SHETTY</p>
        <p><span className="font-semibold text-gray-300">Aakriti ID:</span> AK1875 <span className="bg-green-600 text-white text-xs px-2 py-1 rounded ml-2">Paid</span></p>
        <p><span className="font-semibold text-gray-300">Mobile Number:</span> 9482169917</p>
        <p><span className="font-semibold text-gray-300">College:</span> SRINIVAS INSTITUTE OF TECHNOLOGY, VALACHIL</p>
        <p><span className="font-semibold text-gray-300">Email-ID:</span> PRATHAMPSHETTY99SAI@GMAIL.COM</p>
      </div>
    </div>
  </div>
);

const EventCard = ({ title, date, time, venue, members, leader, invite }) => (
  <div className="bg-[#222222]/90 text-white rounded-xl p-5 shadow-lg border border-white/10 backdrop-blur-sm hover:ring-2 hover:ring-orange-400 transition-all duration-300">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{title}</h3>
      <span className="text-sm text-gray-400">{venue}</span>
    </div>
    <p className="text-sm text-gray-300">{date} – {time}</p>
    <p className="text-xs text-gray-100">{members} member(s)</p>
    <p className="text-xs text-gray-300"><span className="font-semibold text-gray-200">Leader:</span> {leader}</p>
    <div className="mt-3">
      {invite !== "" && (
  <div className="relative">
    <p className="text-xs font-semibold text-gray-200 mb-1">Invite Link:</p>
    <input
      className="w-full text-xs bg-gray-900 p-2 rounded-lg text-gray-100 border border-gray-700/50"
      value={invite}
      readOnly
    />
    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
)}

    </div>
  </div>
);

const EventsSection = () => (
  <div className="bg-[#0f0f0f]/90 text-white p-6 rounded-3xl w-full max-w-4xl shadow-2xl border border-white/10 backdrop-blur-md space-y-6">
    {/* Registered Solo Events */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Registered Events (3)</h2>
      <div className="flex gap-3">
        <button className="bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-700 transition">Register More</button>
        <button className="bg-gray-800 px-4 py-1 rounded-lg hover:bg-gray-700 transition">Download Receipt</button>
      </div>
    </div>
    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">🔥 Register now for just ₹350 and join 50+ epic events!</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <EventCard title="LiveArt" date="03/29/2025" time="01:00 PM" venue="CL-102" members="1" leader="PRATHAMPSHETTY99SAI@GMAIL.COM" invite="" />
      <EventCard title="KagazKala" date="03/28/2025" time="12:30 PM" venue="CL-101" members="1" leader="PRATHAMPSHETTY99SAI@GMAIL.COM" invite="" />
      <EventCard title="Circuitrix" date="03/28/2025" time="10:00 AM" venue="EC Hardware lab" members="1" leader="PRATHAMPSHETTY99SAI@GMAIL.COM" invite="" />
    </div>

    {/* Group Events */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-lime-400 mb-4">Group Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EventCard title="Hackathon" date="03/27/2025" time="09:00 AM" venue="Skill Lab" members="4" leader="ANANYAUDUPA@GMAIL.COM" invite="https://aakriti.canaraengineering.in/dashboard/team/AK123" />
      </div>
    </div>
  </div>
);


function Dashboard() {
 return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-19 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row pt-40gap-8 ">
        <ProfileCard />
        <EventsSection />
      </div>
    </div>
  );
}

export default Dashboard;
