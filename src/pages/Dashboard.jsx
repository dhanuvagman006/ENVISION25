import heroimg from '../assets/blurbg.jpg';

const ProfileCard = () => (
  <div className="bg-gradient-to-br from-[#1a1a1a]/95 to-[#2e1e1e]/95 text-white p-6 rounded-2xl w-full max-w-md shadow-2xl border border-white/10 backdrop-blur-md transform hover:scale-[1.02] transition-all duration-300">
    <div className="flex flex-col items-center space-y-4">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
        alt="avatar"
        className="w-24 h-24 rounded-full border-4 border-white/80 shadow-lg transform hover:rotate-6 transition-transform duration-300"
      />
      <h2 className="text-2xl font-extrabold text-center tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        PRATHAM P SHETTY
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        <button className="px-4 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow hover:bg-gray-600 transition-colors duration-200">
          Show QR
        </button>
        <button className="px-4 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow hover:bg-gray-600 transition-colors duration-200">
          Certificates
        </button>
      </div>
      <button className="mt-4 bg-gradient-to-r from-red-600 to-red-700 px-6 py-2 rounded-lg font-semibold shadow-lg hover:from-red-500 hover:to-red-600 transition-all duration-200">
        Logout
      </button>
      <div className="text-left w-full mt-6 space-y-3 text-sm sm:text-base">
        <p>
          <span className="font-semibold text-gray-200">Name:</span> PRATHAM P SHETTY
        </p>
        <p>
          <span className="font-semibold text-gray-200">Aakriti ID:</span> AK1875
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded ml-2">Paid</span>
        </p>
        <p>
          <span className="font-semibold text-gray-200">Mobile Number:</span> 9482169917
        </p>
        <p>
          <span className="font-semibold text-gray-200">College:</span> SRINIVAS INSTITUTE OF TECHNOLOGY, VALACHIL
        </p>
        <p>
          <span className="font-semibold text-gray-200">Email-ID:</span> PRATHAMPSHETTY99SAI@GMAIL.COM
        </p>
      </div>
    </div>
  </div>
);

const EventCard = ({ title, date, time, venue, members, leader, invite }) => (
  <div className="bg-gradient-to-br from-[#1a1a1a]/90 to-[#2e1e1e]/90 text-white rounded-xl p-5 shadow-xl border border-white/10 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        {title}
      </h3>
      <span className="text-sm text-gray-400">{venue}</span>
    </div>
    <p className="text-sm text-gray-300 mb-2">
      {date} – {time}
    </p>
    <p className="text-xs text-gray-100 mb-2">{members} member(s)</p>
    <p className="text-xs text-gray-300">
      <span className="font-semibold text-gray-200">Team Leader:</span> {leader}
    </p>
    <div className="mt-3">
      <p className="text-xs font-semibold text-gray-200 mb-1">Invite Link:</p>
      <div className="relative">
        <input
          className="w-full text-xs bg-gray-800/50 p-2 rounded-lg text-gray-800 border border-gray-700/50 focus:outline-none focus:border-blue-500 transition-colors"
          value={invite}
          readOnly
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const EventsSection = () => (
  <div className="bg-gradient-to-br from-[#1a1a1a]/95 to-[#2e1e1e]/95 text-white p-6 rounded-2xl w-full max-w-4xl shadow-2xl border border-white/10 backdrop-blur-md space-y-6">
    <div>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Registered Events (4)
        </h2>
        <div className="flex gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200">
            Register More
          </button>
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-1 rounded-lg shadow hover:bg-gray-600 transition-all duration-200">
            Download Receipt
          </button>
        </div>
      </div>
      <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500">
        🔥 Register now for just ₹350 and join 50+ epic events!
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <EventCard
        title="Aetherion"
        date="03/27/2025"
        time="09:00 AM"
        venue="Skill Lab"
        members="4"
        leader="ANANYAUDUPA@GMAIL.COM"
        invite="https://aakriti.canaraengineering.in/dashboard/team/AK123"
      />
      <EventCard
        title="LiveArt"
        date="03/29/2025"
        time="01:00 PM"
        venue="CL-102"
        members="1"
        leader="PRATHAMPSHETTY99SAI@GMAIL.COM"
        invite="https://aakriti.canaraengineering.in/dashboard/team/AK124"
      />
      <EventCard
        title="KagazKala"
        date="03/28/2025"
        time="12:30 PM"
        venue="CL-101"
        members="1"
        leader="PRATHAMPSHETTY99SAI@GMAIL.COM"
        invite="https://aakriti.canaraengineering.in/dashboard/team/AK125"
      />
      <EventCard
        title="Circuitrix"
        date="03/28/2025"
        time="10:00 AM"
        venue="EC Hardware lab"
        members="1"
        leader="PRATHAMPSHETTY99SAI@GMAIL.COM"
        invite="https://aakriti.canaraengineering.in/dashboard/team/AK126"
      />
    </div>
  </div>
);

function Dashboard() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <img
        src={heroimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-center gap-6 px-4 py-40 lg:py-40">
        <ProfileCard />
        <EventsSection />
      </div>
    </div>
  );
}

export default Dashboard;