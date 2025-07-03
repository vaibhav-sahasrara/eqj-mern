// const CourtDropdown = ({ label, options, value, onChange }) => {
//   return (
//     <div className="flex flex-col items-start w-[220px]">
//       <label className="mb-1 text-sm text-gray-200">{label}</label>
//       <select
//         value={value}
//         onChange={onChange}
//         className="bg-white text-gray-800 border border-white rounded-md px-4 py-2 w-full"
//       >
//         <option value="">{label}</option>
//         {options.map((opt) => (
//           <option key={opt.value} value={opt.value}>
//             {opt.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CourtDropdown;


// src/components/court/CourtDropdown.jsx
const CourtDropdown = ({ label, value, onChange, options }) => {
  return (
    <div className="w-full sm:w-[300px]">
      <label className="block mb-2 text-sm font-semibold text-white">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 text-gray-800 bg-white rounded-md shadow-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none"
        >
          <option value="">निवडा</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Arrow icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          ▼
        </div>
      </div>
    </div>
  );
};

export default CourtDropdown;
