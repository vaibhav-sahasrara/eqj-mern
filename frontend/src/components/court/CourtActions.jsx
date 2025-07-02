// import { useState } from "react";
// import CourtDropdown from "./CourtDropdown";
// import CaseBoard from "../../pages/CaseBoard"; // ✅ Import your CaseBoard component
// import { Link } from "react-router-dom";

// const CourtActions = () => {
//   const [showDropdowns, setShowDropdowns] = useState(false);
//   const [district, setDistrict] = useState("");
//   const [court, setCourt] = useState("");
//   const [office, setOffice] = useState("");

//   const allSelected = district && court && office;

//   return (
//     <div className="mt-6 flex flex-col items-center gap-6">
//       {/* Button Group */}
//       {!showDropdowns && (
//         <div className="flex flex-wrap gap-6 justify-center">
//           <button
//             onClick={() => setShowDropdowns(true)}
//             className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]"
//           >
//             जिल्हा निवडा
//           </button>

//           {/* Optional: You can hide these or remove them */}
//           <button className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]">
//             मुख्य न्यायालय निवडा
//           </button>
//           <button className="bg-orange-600 text-white border border-white px-6 py-2 rounded-md min-w-[220px]">
//             कार्यालय निवडा
//           </button>
//         </div>
//       )}

//       {/* Dropdowns – shown only if "जिल्हा निवडा" clicked */}
//       {showDropdowns && !allSelected && (
//         <div className="flex flex-wrap gap-6 justify-center w-full max-w-3xl">
//           <CourtDropdown
//             label="जिल्हा निवडा"
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//             options={[
//               { value: "pune", label: "पुणे" },
//               { value: "nagpur", label: "नागपूर" },
//               { value: "nashik", label: "नाशिक" },
//             ]}
//           />

//           <CourtDropdown
//             label="मुख्य न्यायालय"
//             value={court}
//             onChange={(e) => setCourt(e.target.value)}
//             options={[
//               { value: "bombay", label: "बॉम्बे उच्च न्यायालय" },
//               { value: "aurangabad", label: "औरंगाबाद खंडपीठ" },
//               { value: "nagpur", label: "नागपूर खंडपीठ" },
//             ]}
//           />

//           <CourtDropdown
//             label="कार्यालय निवडा"
//             value={office}
//             onChange={(e) => setOffice(e.target.value)}
//             options={[
//               { value: "talathi", label: "तलाठी कार्यालय" },
//               { value: "tehsil", label: "तहसील कार्यालय" },
//               { value: "collector", label: "जिल्हाधिकारी कार्यालय" },
//             ]}
//           />
//         </div>
//       )}

//       {/* ✅ Show CaseBoard only when all 3 dropdowns selected */}
//       {allSelected && (
//         <div className="w-full mt-6">
//           <CaseBoard district={district} court={court} office={office} />
//         </div>
//       )}

//       {/* Back Button */}
//       <Link to="/">
//         <button className="mt-4 text-sm text-white underline">मागे जा</button>
//       </Link>
//     </div>
//   );
// };

// export default CourtActions;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CourtDropdown from "./CourtDropdown";

const CourtActions = () => {
  const navigate = useNavigate();
  const [district, setDistrict] = useState("");
  const [court, setCourt] = useState("");
  const [office, setOffice] = useState("");
  const [showDropdowns, setShowDropdowns] = useState(false);

  const allSelected = district && court && office;

  // Navigate to /case-board with state
  if (allSelected) {
    navigate("/case-board", {
      state: { district, court, office },
    });
  }

  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      {!showDropdowns && (
        <div className="flex flex-wrap gap-6 justify-center">
          <button
            onClick={() => setShowDropdowns(true)}
            className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]"
          >
            जिल्हा निवडा
          </button>

          {/* Optional: You can hide these or remove them */}
          <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
            मुख्य न्यायालय निवडा
          </button>
          <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
            कार्यालय निवडा
          </button>
        </div>
      )}

      {showDropdowns && (
        <>
          <div className="flex flex-wrap gap-6 justify-center w-full max-w-3xl">
            <CourtDropdown
              label="जिल्हा निवडा"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              options={[
                { value: "pune", label: "पुणे" },
                { value: "nagpur", label: "नागपूर" },
                { value: "nashik", label: "नाशिक" },
              ]}
            />
            <CourtDropdown
              label="मुख्य न्यायालय"
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              options={[
                { value: "bombay", label: "बॉम्बे उच्च न्यायालय" },
                { value: "aurangabad", label: "औरंगाबाद खंडपीठ" },
                { value: "nagpur", label: "नागपूर खंडपीठ" },
              ]}
            />
            <CourtDropdown
              label="कार्यालय निवडा"
              value={office}
              onChange={(e) => setOffice(e.target.value)}
              options={[
                { value: "talathi", label: "तलाठी कार्यालय" },
                { value: "tehsil", label: "तहसील कार्यालय" },
                { value: "collector", label: "जिल्हाधिकारी कार्यालय" },
              ]}
            />
          </div>

          {allSelected && (
            <button
              onClick={handleProceed}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
            >
              पुढे जा
            </button>
          )}
        </>
      )}

      <Link to="/">
        <button className="mt-4 text-sm text-white underline">मागे जा</button>
      </Link>
    </div>
  );
};

export default CourtActions;
