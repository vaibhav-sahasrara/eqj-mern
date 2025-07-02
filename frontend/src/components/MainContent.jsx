import useClock from "../utils/useClock";

const MainContent = () => {
  const { time, date } = useClock();

  return (
    <main className="min-h-screen bg-gray-100 w-full relative overflow-x-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-center bg-white px-6 py-4 rounded-md relative z-10">
        <div className="text-xl font-semibold text-gray-800">YourLogo</div>
        {/* <div className="text-sm font-mono text-gray-600 text-right">
          <div>{date}</div>
          <div>{time}</div>
        </div> */}
        <div className="text-right text-gray-700 font-sans leading-tight">
          <div className="text-[17px] font-medium tracking-wide text-gray-900">
            {date}
          </div>
          <div className="text-[18px] text-gray-600 mt-1">{time}</div>
        </div>
      </div>

      {/* Seal Image — moved outside blue box and above header */}
      <div className="absolute left-1/2 -translate-x-1/2 top-14 z-50">
        <img
          src="/seal-of-mh.png"
          alt="Seal of Maharashtra"
          className="w-44 h-44 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Full-height Blue Section */}
      <div className="w-screen h-screen bg-[#0a3b6b] flex flex-col items-center justify-start pt-36 px-4 z-0 relative">
        {/* Top-right office button + hamburger */}
        <div className="absolute top-6 right-6 flex items-center gap-3 z-40">
          {/* Office Button */}
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md border border-white hover:bg-orange-700 transition">
            कार्यालय लॉगिन
          </button>
          {/* Hamburger Icon */}
          <button className="text-white text-3xl hover:text-orange-400 focus:outline-none">
            &#9776;
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-400 tracking-wide mt-3">
          महाराष्ट्र शासन
        </h1>
        <h2 className="text-6xl font-extrabold mt-5 text-white">
          महसूल व वन विभाग
        </h2>

        <hr className="w-48 border-t-2 border-gray-300 mt-6 mb-6" />

        <div className="flex gap-4 flex-wrap justify-center mt-9">
          <button className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]">
            लाइव केस बोर्ड
          </button>
          <button className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]">
            न्यायालयीन कामकाजाचे दिवस
          </button>
          <button className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]">
            केसची स्थिती आणि पक्षकार
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
