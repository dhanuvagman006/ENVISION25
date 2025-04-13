import React from "react";

export function StickyNavbar() {
  const total = 450;
  const eventsPurchased = 0;

  return (
    <nav className="bg-gray-800 bg-opacity-50 text-white shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl mx-auto rounded-2xl z-50 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold tracking-tight hover:text-gray-200 transition-colors">
            ENVISION 25
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {["Home", "Gallery", "Events", "Contacts"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-gray-200 transition-colors text-sm font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 badge badge-sm badge-primary">
                {eventsPurchased}
              </span>
            </div>
            <div
              tabIndex={0}
              className="dropdown-content bg-gray-800 text-white mt-2 w-64 rounded-xl shadow-xl border border-gray-700"
            >
              <div className="p-4">
                <span className="text-lg font-semibold block">
                  {eventsPurchased} Items
                </span>
                <span className="text-gray-300">Subtotal: ${total}</span>
                <button className="btn btn-primary btn-sm w-full mt-3">
                  View cart
                </button>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content bg-gray-800 text-white mt-2 w-48 rounded-xl shadow-xl border border-gray-700"
            >
              <li>
                <a className="flex justify-between items-center px-4 py-3 hover:bg-gray-700">
                  Profile
                </a>
                <a href='settings' className="flex justify-between items-center px-4 py-3 hover:bg-gray-700">
                  Settings
                </a>
                <a href='/logout'className="flex justify-between items-center px-4 py-3 hover:bg-gray-700">
                  logout
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content bg-gray-800 text-white mt-2 w-48 rounded-xl shadow-xl border border-gray-700"
              >
                {["Home", "Gallery", "Events", "Contacts"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-3 hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default StickyNavbar;
