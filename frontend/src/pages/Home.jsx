import { useState } from "react";
import CourtActions from "../components/court/CourtActions";
import { Link } from "react-router-dom";
const Home = () => {
  const [showCourtActions, setShowCourtActions] = useState(false);

  return (
    <div className="text-white flex flex-col items-center mt-12 gap-8">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Link to="/court-actions">
          <button
            className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]"
            onClick={() => setShowCourtActions(true)}
          >
            लाइव केस बोर्ड
          </button>
        </Link>

        <Link to="/court-actions">
          <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
            न्यायालयीन कामकाजाचे दिवस
          </button>
        </Link>
        {/* <Link to="/court-actions">
          <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
            केसची स्थिती आणि पक्षकार
          </button>
        </Link> */}

        <Link to="/court-actions" state={{ type: "status-search" }}>
          <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
            केसची स्थिती आणि पक्षकार
          </button>
        </Link>
      </div>

      {/* Conditionally Rendered Court Actions */}
      {showCourtActions && <CourtActions />}
    </div>
  );
};

export default Home;
