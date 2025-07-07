import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex items-center bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
      <button
        onClick={() => changeLanguage("mr")}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
          currentLang === "mr"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        मराठी
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
          currentLang === "en"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
