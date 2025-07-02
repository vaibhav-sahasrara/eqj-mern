

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PlainLayout = () => {
  return (
    <main className="min-h-screen w-full bg-gray-100 flex flex-col">
        {/* <Navbar/> */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default PlainLayout;
