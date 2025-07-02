// src/components/DropdownMenu.jsx
import { Link } from "react-router-dom";

const DropdownMenu = ({ onClose }) => {
  const menuItems = [
    { path: "/", label: "मुख्यपृष्ठ (Home)" },
    { path: "/case-board", label: "लाइव केस बोर्ड" },
    { path: "/court-days", label: "न्यायालयीन कामकाजाचे दिवस" },
    { path: "/case-status", label: "केसची स्थिती आणि पक्षकार" },
    { path: "/district-info", label: "जिल्ह्याची माहिती" },
    { path: "/guide", label: "मार्गदर्शक" },
    { path: "/language", label: "भाषा निवडा" },
    { path: "/feedback", label: "अभिप्राय" },
    { path: "/contact", label: "संपर्क" },
    { path: "/share", label: "शेअर करा" },
  ];

  return (
    <div className="absolute top-14 right-0 mt-2 w-64 bg-white rounded-md shadow-lg text-gray-800 z-50">
      <ul className="flex flex-col text-sm font-medium">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.path} onClick={onClose}>
            <li className="px-4 py-2 hover:bg-gray-100">{item.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
