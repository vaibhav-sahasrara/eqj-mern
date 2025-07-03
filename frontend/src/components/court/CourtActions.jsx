// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import CourtDropdown from "./CourtDropdown";

// const CourtActions = () => {
//   const navigate = useNavigate();
//   const [district, setDistrict] = useState("");
//   const [court, setCourt] = useState("");
//   const [office, setOffice] = useState("");
//   const [showDropdowns, setShowDropdowns] = useState(false);

//   const allSelected = district && court && office;

//   // Navigate to /case-board with state
//   if (allSelected) {
//     navigate("/case-board", {
//       state: { district, court, office },
//     });
//   }

//   return (
//     <div className="mt-6 flex flex-col items-center gap-6">
//       {!showDropdowns && (
//         <div className="flex flex-wrap gap-6 justify-center">
//           <button
//             onClick={() => setShowDropdowns(true)}
//             className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]"
//           >
//             जिल्हा निवडा
//           </button>

//           {/* Optional: You can hide these or remove them */}
//           <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
//             मुख्य न्यायालय निवडा
//           </button>
//           <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
//             कार्यालय निवडा
//           </button>
//         </div>
//       )}

//       {showDropdowns && (
//         <>
//           <div className="flex flex-wrap gap-6 justify-center w-full max-w-3xl">
//             <CourtDropdown
//               label="जिल्हा निवडा"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               options={[
//                 { value: "pune", label: "पुणे" },
//                 { value: "nagpur", label: "नागपूर" },
//                 { value: "nashik", label: "नाशिक" },
//               ]}
//             />
//             <CourtDropdown
//               label="मुख्य न्यायालय"
//               value={court}
//               onChange={(e) => setCourt(e.target.value)}
//               options={[
//                 { value: "bombay", label: "बॉम्बे उच्च न्यायालय" },
//                 { value: "aurangabad", label: "औरंगाबाद खंडपीठ" },
//                 { value: "nagpur", label: "नागपूर खंडपीठ" },
//               ]}
//             />
//             <CourtDropdown
//               label="कार्यालय निवडा"
//               value={office}
//               onChange={(e) => setOffice(e.target.value)}
//               options={[
//                 { value: "talathi", label: "तलाठी कार्यालय" },
//                 { value: "tehsil", label: "तहसील कार्यालय" },
//                 { value: "collector", label: "जिल्हाधिकारी कार्यालय" },
//               ]}
//             />
//           </div>

//           {allSelected && (
//             <button
//               onClick={handleProceed}
//               className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
//             >
//               पुढे जा
//             </button>
//           )}
//         </>
//       )}

//       <Link to="/">
//         <button className="mt-4 text-sm text-white underline">मागे जा</button>
//       </Link>
//     </div>
//   );
// };

// export default CourtActions;

// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import CourtDropdown from "./CourtDropdown";

// const CourtActions = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isStatusSearch = location.state?.type === "status-search";

//   const [district, setDistrict] = useState("");
//   const [court, setCourt] = useState("");
//   const [office, setOffice] = useState("");
//   const [caseNo, setCaseNo] = useState("");
//   const [caseYear, setCaseYear] = useState("");
//   const [showDropdowns, setShowDropdowns] = useState(false);

//   const allSelected = district && court && office;

//   const handleProceed = () => {
//     navigate("/case-board", {
//       state: { district, court, office },
//     });
//   };

//   const handleSearch = () => {
//     alert(`Searching Case: ${caseNo} (${caseYear})`);
//   };

//   return (
//     <div className="mt-6 flex flex-col items-center gap-6">
//       {!showDropdowns && (
//         <div className="flex flex-wrap gap-6 justify-center">
//           <button
//             onClick={() => setShowDropdowns(true)}
//             className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]"
//           >
//             जिल्हा निवडा
//           </button>

//           <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
//             मुख्य न्यायालय निवडा
//           </button>
//           <button className="bg-orange-600 text-white border border-white px-10 py-4 rounded-md min-w-[220px]">
//             कार्यालय निवडा
//           </button>
//         </div>
//       )}

//       {showDropdowns && (
//         <>
//           <div className="flex flex-wrap gap-6 justify-center w-full max-w-3xl">
//             <CourtDropdown
//               label="जिल्हा निवडा"
//               value={district}
//               onChange={(e) => setDistrict(e.target.value)}
//               options={[
//                 { value: "pune", label: "पुणे" },
//                 { value: "nagpur", label: "नागपूर" },
//                 { value: "nashik", label: "नाशिक" },
//               ]}
//             />
//             <CourtDropdown
//               label="मुख्य न्यायालय"
//               value={court}
//               onChange={(e) => setCourt(e.target.value)}
//               options={[
//                 { value: "bombay", label: "बॉम्बे उच्च न्यायालय" },
//                 { value: "aurangabad", label: "औरंगाबाद खंडपीठ" },
//                 { value: "nagpur", label: "नागपूर खंडपीठ" },
//               ]}
//             />
//             <CourtDropdown
//               label="कार्यालय निवडा"
//               value={office}
//               onChange={(e) => setOffice(e.target.value)}
//               options={[
//                 { value: "talathi", label: "तलाठी कार्यालय" },
//                 { value: "tehsil", label: "तहसील कार्यालय" },
//                 { value: "collector", label: "जिल्हाधिकारी कार्यालय" },
//               ]}
//             />
//           </div>

//           {/* 👇 Show these fields only for status-search */}
//           {isStatusSearch && (
//             <div className="flex flex-col gap-4 mt-6 items-center w-full max-w-md">
//               <input
//                 type="text"
//                 placeholder="केस क्रमांक"
//                 value={caseNo}
//                 onChange={(e) => setCaseNo(e.target.value)}
//                 className="w-full px-4 py-2 rounded-md text-black"
//               />
//               <input
//                 type="text"
//                 placeholder="केस वर्ष"
//                 value={caseYear}
//                 onChange={(e) => setCaseYear(e.target.value)}
//                 className="w-full px-4 py-2 rounded-md text-black"
//               />
//               <button
//                 onClick={handleSearch}
//                 className="bg-green-600 text-white px-6 py-2 rounded-md"
//               >
//                 शोधा
//               </button>
//             </div>
//           )}

//           {!isStatusSearch && allSelected && (
//             <button
//               onClick={handleProceed}
//               className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
//             >
//               पुढे जा
//             </button>
//           )}
//         </>
//       )}

//       <Link to="/">
//         <button className="mt-4 text-sm text-white underline">मागे जा</button>
//       </Link>
//     </div>
//   );
// };

// export default CourtActions;

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CourtDropdown from "./CourtDropdown";

const CourtActions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStatusSearch = location.state?.type === "status-search";

  const [district, setDistrict] = useState("");
  const [court, setCourt] = useState("");
  const [office, setOffice] = useState("");
  const [caseNo, setCaseNo] = useState("");
  const [caseYear, setCaseYear] = useState("");

  const allSelected = district && court && office;

  const handleProceed = () => {
    navigate("/case-board", {
      state: { district, court, office },
    });
  };

  const handleSearch = () => {
    alert(`Searching Case: ${caseNo} (${caseYear})`);
    // You can replace this with actual search logic
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      {/* Dropdowns Always Visible */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center w-full max-w-5xl">
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

      {/* Case Number & Year input fields if status-search */}
      {isStatusSearch && (
  <div className="flex flex-col gap-4 mt-6 items-center w-full max-w-5xl px-4">
    {/* Inputs inline */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
      <input
        type="text"
        placeholder="केस क्रमांक"
        value={caseNo}
        onChange={(e) => setCaseNo(e.target.value)}
        className="w-full sm:w-1/3 max-w-xs px-4 py-2 rounded-md text-black"
      />
      <input
        type="text"
        placeholder="केस वर्ष"
        value={caseYear}
        onChange={(e) => setCaseYear(e.target.value)}
        className="w-full sm:w-1/3 max-w-xs px-4 py-2 rounded-md text-black"
      />
    </div>

    {/* Search button below */}
    <button
      onClick={handleSearch}
      className="bg-green-600 text-white px-6 py-2 rounded-md"
    >
      शोधा
    </button>
  </div>
)}

      {/* {isStatusSearch && (
        <div className="flex flex-col gap-4 mt-6 items-center w-full max-w-md">
          <input
            type="text"
            placeholder="केस क्रमांक"
            value={caseNo}
            onChange={(e) => setCaseNo(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-black"
          />
          <input
            type="text"
            placeholder="केस वर्ष"
            value={caseYear}
            onChange={(e) => setCaseYear(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded-md"
          >
            शोधा
          </button>
        </div>
      )} */}

      {/* Proceed Button if not status-search */}
      {!isStatusSearch && allSelected && (
        <button
          onClick={handleProceed}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
        >
          पुढे जा
        </button>
      )}

      <Link to="/">
        <button className="mt-4 text-sm text-white underline">मागे जा</button>
      </Link>
    </div>
  );
};

export default CourtActions;
