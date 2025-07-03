import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import useClock from "../utils/useClock";
import Footer from "./Footer";
import DropdownMenu from "./DropdownMenu";

const Layout = () => {
  const { time, date } = useClock();
  const location = useLocation();
  const hiddenPages = ["/case-board", "/login"];
  const shouldHideSeal = hiddenPages.includes(location.pathname);

  //   const isCaseBoard = location.pathname === "/case-board";
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-gray-100 w-full overflow-x-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-center bg-white px-6 py-4 relative z-10">
        <img
          src="/emblem.png"
          alt="Seal of Maharashtra"
          className="w-20 h-20 object-cover shadow-lg"
        />
        <div className="text-right text-gray-700 font-sans leading-tight ml-auto">
          <div className="text-[17px] font-extrabold tracking-wide text-[#0a3b6b]">
            {date}
          </div>
          <div className="text-[18px] font-semibold text-[#0a3b6b] mt-1">
            {time}
          </div>
        </div>
      </div>

      {/* Seal Image (only for non-caseboard pages) */}
      {!shouldHideSeal && (
        <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50">
          <img
            src="/seal-of-mh.png"
            alt="Seal of Maharashtra"
            className="w-44 h-44 object-cover rounded-full shadow-lg"
          />
        </div>
      )}

      {/* Main Content Wrapper */}
      <div
        className={`w-full bg-[#0a3b6b] flex flex-col items-center flex-grow relative ${
          shouldHideSeal ? "pt-10" : "pt-36"
        } px-4`}
      >
        {/* Login Button */}
        <div className="absolute top-6 right-6 flex items-center gap-3 z-40">
          <Link to="/login">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md border border-white hover:bg-orange-700 transition">
              कार्यालय लॉगिन
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white text-3xl hover:text-orange-400 focus:outline-none"
          >
            &#9776;
          </button>
          {/* ✅ Dropdown */}
          {menuOpen && <DropdownMenu onClose={closeMenu} />}
        </div>

        {/* Page Headings (skip if /case-board) */}
        {!shouldHideSeal && (
          <>
            <h1 className="text-3xl font-bold text-gray-400 tracking-wide mt-3">
              महाराष्ट्र शासन
            </h1>
            <h2 className="text-6xl font-extrabold mt-5 text-white">
              महसूल व वन विभाग
            </h2>
            <hr className="w-48 border-t-2 border-gray-300 mt-6 mb-6" />
          </>
        )}

        {/* Page Content */}
        <div
          className={`w-full ${
            shouldHideSeal ? "max-w-full" : "max-w-5xl"
          } mb-16`}
        >
          <Outlet />
        </div>
      </div>

      {/* Footer always shown */}
      <Footer />
    </main>
  );
};

export default Layout;
