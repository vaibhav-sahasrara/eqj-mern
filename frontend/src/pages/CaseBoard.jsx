// const CaseBoard = ({ district, court, office }) => {
//   // Dummy data (replace with real data from backend)
//   const caseData = [
//     {
//       id: 1,
//       year: 2023,
//       number: "123/पुणे",
//       petitioner: "राम यादव",
//       respondent: "सरकार महाराष्ट्र",
//       hearingTime: "११:३० AM",
//     },
//     {
//       id: 2,
//       year: 2022,
//       number: "456/नाशिक",
//       petitioner: "सीता मोरे",
//       respondent: "पंचायत समिती",
//       hearingTime: "१२:१५ PM",
//     },
//   ];

//   return (
//     <div className="bg-white text-gray-800 p-6 rounded shadow mt-6 w-full">
//       <h2 className="text-2xl font-bold mb-4 text-center">लाइव केस बोर्ड</h2>

//       <div className="flex flex-wrap justify-center gap-4 text-white font-semibold text-sm mb-6">
//         <span className="bg-orange-600 px-4 py-2 rounded-md">
//           प्रलंबित सुनावणीसाठी
//         </span>
//         <span className="bg-green-600 px-4 py-2 rounded-md">चालू खटले</span>
//         <span className="bg-yellow-500 px-4 py-2 rounded-md">स्थगित खटले</span>
//         <span className="bg-blue-600 px-4 py-2 rounded-md">
//           सुनावणीसाठी वाट पाहत आहेत
//         </span>
//         <span className="bg-gray-600 px-4 py-2 rounded-md">ऐकलेले खटले</span>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full table-auto border border-gray-300 text-center">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">अ.क्र.</th>
//               <th className="border px-4 py-2">केस वर्ष</th>
//               <th className="border px-4 py-2">केस नं</th>
//               <th className="border px-4 py-2">वादीचे नाव</th>
//               <th className="border px-4 py-2">प्रतिवादीचे नाव</th>
//               <th className="border px-4 py-2">संभाव्य सुनावणीची वेळ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {caseData.map((caseItem, index) => (
//               <tr key={caseItem.id} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{index + 1}</td>
//                 <td className="border px-4 py-2">{caseItem.year}</td>
//                 <td className="border px-4 py-2">{caseItem.number}</td>
//                 <td className="border px-4 py-2">{caseItem.petitioner}</td>
//                 <td className="border px-4 py-2">{caseItem.respondent}</td>
//                 <td className="border px-4 py-2">{caseItem.hearingTime}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-6 text-sm text-gray-600 text-center">
//         <p>
//           🔷 जिल्हा: {district} | 🔷 मुख्य न्यायालय: {court} | 🔷 कार्यालय:{" "}
//           {office}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CaseBoard;

import { useLocation, useNavigate } from "react-router-dom";

const CaseBoard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/"); // fallback if no state (e.g., direct URL hit)
    return null;
  }

  const { district, court, office } = state;

  // dummy data (use backend later)
  const caseData = [
    {
      id: 1,
      year: 2023,
      number: "123/पुणे",
      petitioner: "राम यादव",
      respondent: "सरकार महाराष्ट्र",
      hearingTime: "११:३० AM",
    },
    {
      id: 2,
      year: 2022,
      number: "456/नाशिक",
      petitioner: "सीता मोरे",
      respondent: "पंचायत समिती",
      hearingTime: "१२:१५ PM",
    },
  ];

  return (
    <div className="bg-white text-gray-800 p-6 rounded shadow mt-9 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">लाइव केस बोर्ड</h2>

      {/* <div className="flex flex-wrap justify-center gap-4 text-white font-semibold text-sm mb-6">
        <span className="bg-orange-600 px-4 py-2 rounded-md">
          प्रलंबित सुनावणीसाठी
        </span>
        <span className="bg-green-600 px-4 py-2 rounded-md">चालू खटले</span>
        <span className="bg-yellow-500 px-4 py-2 rounded-md">स्थगित खटले</span>
        <span className="bg-blue-600 px-4 py-2 rounded-md">
          सुनावणीसाठी वाट पाहत आहेत
        </span>
        <span className="bg-gray-600 px-4 py-2 rounded-md">ऐकलेले खटले</span>
      </div> */}

      <div className="flex flex-wrap justify-center gap-4 text-white font-semibold text-sm mb-6">
  <span className="bg-orange-600 px-4 py-2 rounded-md">
    Pending for Hearing
  </span>
  <span className="bg-green-600 px-4 py-2 rounded-md">
    Active Cases
  </span>
  <span className="bg-yellow-500 px-4 py-2 rounded-md">
    Postponed Cases
  </span>
  <span className="bg-blue-600 px-4 py-2 rounded-md">
    Waiting for Hearing
  </span>
  <span className="bg-gray-600 px-4 py-2 rounded-md">
    Heard Cases
  </span>
</div>


      <table className="w-full table-auto border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">अ.क्र.</th>
            <th className="border px-4 py-2">केस वर्ष</th>
            <th className="border px-4 py-2">केस नं</th>
            <th className="border px-4 py-2">वादीचे नाव</th>
            <th className="border px-4 py-2">प्रतिवादीचे नाव</th>
            <th className="border px-4 py-2">संभाव्य सुनावणीची वेळ</th>
          </tr>
        </thead>
        <tbody>
          {caseData.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.year}</td>
              <td className="border px-4 py-2">{item.number}</td>
              <td className="border px-4 py-2">{item.petitioner}</td>
              <td className="border px-4 py-2">{item.respondent}</td>
              <td className="border px-4 py-2">{item.hearingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-600 text-center">
        <p>
          🔷 जिल्हा: {district} | 🔷 मुख्य न्यायालय: {court} | 🔷 कार्यालय:{" "}
          {office}
        </p>
      </div>
    </div>
  );
};

export default CaseBoard;
