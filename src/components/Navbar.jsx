import React from "react";

export function StickyNavbar() {
  const total = 450;
  const eventsPurchased = 5;

  return (
    <div className="navbar bg-gray-800 text-white shadow-sm rounded-2xl fixed top-0 left-0 right-0 w-[94%] m-10 z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">ENVISION 25</a>
      </div>
      <div className="navbar-end">
        <div className="gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator pb-3">
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
                <span className="badge badge-sm indicator-item">
                  {eventsPurchased}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-gray-800 text-white mt-3 w-52 shadow z-50"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {eventsPurchased} Items
                </span>
                <span className="text-info">Subtotal: ${total}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar p-2"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
