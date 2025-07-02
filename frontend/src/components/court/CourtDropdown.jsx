const CourtDropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col items-start w-[220px]">
      <label className="mb-1 text-sm text-gray-200">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="bg-white text-gray-800 border border-white rounded-md px-4 py-2 w-full"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourtDropdown;
