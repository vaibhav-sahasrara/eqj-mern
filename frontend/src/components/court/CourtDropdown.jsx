

// // src/components/court/CourtDropdown.jsx
// const CourtDropdown = ({ label, value, onChange, options }) => {
//   return (
//     <div className="w-full sm:w-[300px]">
//       <label className="block mb-2 text-sm font-semibold text-white">
//         {label}
//       </label>
//       <div className="relative">
//         <select
//           value={value}
//           onChange={onChange}
//           className="w-full px-4 py-3 text-gray-800 bg-white rounded-md shadow-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none"
//         >
//           <option value="">निवडा</option>
//           {options.map((opt) => (
//             <option key={opt.value} value={opt.value}>
//               {opt.label}
//             </option>
//           ))}
//         </select>

//         {/* Arrow icon */}
//         <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
//           ▼
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourtDropdown;


// src/components/court/CourtDropdown.jsx
import { useTranslation } from "react-i18next";

const CourtDropdown = ({ label, value, onChange, options }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full sm:w-[300px]">
      <label className="block mb-2 text-sm font-semibold text-white">
        {t(label)}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 text-gray-800 bg-white rounded-md shadow-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none appearance-none"
        >
          <option value="">{t("select")}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(opt.label)}
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
