import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import useClock from "../utils/useClock";
import Footer from "./Footer";
import DropdownMenu from "./DropdownMenu";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t } = useTranslation();

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
        <Link to="/">
          <div className="w-24 h-24 rounded-full bg-gray-500  shadow-md flex items-center justify-center">
            <img
              src="/eqj.png"
              alt="EQJ Emblem"
              className="w-full h-full p-2 object-contain rounded-md"
            />
          </div>
        </Link>

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
      {/* {!shouldHideSeal && (
        <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50">
          <img
            src="/seal-of-mh.png"
            alt="Seal of Maharashtra"
            className="w-44 h-44 object-cover rounded-full shadow-lg"
          />
        </div>
      )} */}

      {!shouldHideSeal && (
        <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50 hidden lg:block">
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
          <LanguageSwitcher />

          <Link to="/login">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md border border-white hover:bg-orange-700 transition">
              {t("officeLogin")}
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
        {/* {!shouldHideSeal && (
          <>
            <h1 className="text-3xl font-bold text-gray-400 tracking-wide mt-1">
              {t("govtOfMaharashtra")}
            </h1>
            <h2 className="text-5xl font-extrabold mt-5 text-white">
              {t("revenueForestDept")}
            </h2>

            <hr className="w-48 border-t-2 border-gray-300 mt-6 mb-6" />
          </>
        )} */}

        {!shouldHideSeal && (
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 tracking-wide">
              {t("govtOfMaharashtra")}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-5 text-white">
              {t("revenueForestDept")}
            </h2>
            <hr className="w-32 sm:w-40 md:w-48 border-t-2 border-gray-300 mt-6 mb-6" />
          </div>
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
