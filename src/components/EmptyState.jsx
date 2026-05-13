const EmptyState = ({ title, message, type = "empty" }) => {
  const icon =
    type === "filters" ? (
      <svg
        width="40"
        height="40"
        fill="none"
        stroke="#818CF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ) : (
      <svg
        width="40"
        height="40"
        fill="none"
        stroke="#818CF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    );

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="w-20 h-20 rounded-2xl flex justify-center items-center mb-5 bg-[#E0E7FF]">
        {icon}
      </div>

      <h2 className="text-lg font-semibold mb-2 text-[#1E1B4B]">{title}</h2>

      <p className="text-sm text-[#6B7280]  max-w-xs">{message}</p>
    </div>
  );
};

export default EmptyState;
