import useClock from "../utils/useClock";

const Navbar = () => {
  const { time, date } = useClock();

  return (
    // Navbar.jsx
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center w-full sticky top-0 z-50">
      <div className="text-xl font-semibold text-gray-800">YourLogo</div>
      <div className="text-sm font-mono text-gray-600 text-right">
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </nav>
  );
};

export default Navbar;
