import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ NEW
import CourtDropdown from "./CourtDropdown";

const CourtActions = () => {
  const { t } = useTranslation(); // ✅ NEW
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
    alert(`${t("searchingCase")}: ${caseNo} (${caseYear})`);
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-6">
      {/* Dropdowns Always Visible */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center w-full max-w-5xl">
        <CourtDropdown
          label={t("selectDistrict")}
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          options={[
            { value: "pune", label: t("pune") },
            { value: "nagpur", label: t("nagpur") },
            { value: "nashik", label: t("nashik") },
          ]}
        />
        <CourtDropdown
          label={t("selectCourt")}
          value={court}
          onChange={(e) => setCourt(e.target.value)}
          options={[
            { value: "bombay", label: t("bombayHighCourt") },
            { value: "aurangabad", label: t("aurangabadBench") },
            { value: "nagpur", label: t("nagpurBench") },
          ]}
        />
        <CourtDropdown
          label={t("selectOffice")}
          value={office}
          onChange={(e) => setOffice(e.target.value)}
          options={[
            { value: "talathi", label: t("talathiOffice") },
            { value: "tehsil", label: t("tehsilOffice") },
            { value: "collector", label: t("collectorOffice") },
          ]}
        />
      </div>

      {isStatusSearch && (
        <div className="flex flex-col gap-4 mt-6 items-center w-full max-w-5xl px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <input
              type="text"
              placeholder={t("caseNumber")}
              value={caseNo}
              onChange={(e) => setCaseNo(e.target.value)}
              className="w-full sm:w-1/3 max-w-xs px-4 py-2 rounded-md text-black"
            />
            <input
              type="text"
              placeholder={t("caseYear")}
              value={caseYear}
              onChange={(e) => setCaseYear(e.target.value)}
              className="w-full sm:w-1/3 max-w-xs px-4 py-2 rounded-md text-black"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 py-2 rounded-md"
          >
            {t("search")}
          </button>
        </div>
      )}

      {!isStatusSearch && allSelected && (
        <button
          onClick={handleProceed}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md"
        >
          {t("proceed")}
        </button>
      )}

      <Link to="/">
        <button className="mt-4 text-sm text-white underline">
          {t("goBack")}
        </button>
      </Link>
    </div>
  );
};

export default CourtActions;
