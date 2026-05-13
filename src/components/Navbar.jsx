const Navbar = ({ onAddClick }) => {
  return (
    <div className="sticky top-0 z-50 px-6 py-3.5 flex justify-between items-center bg-[#1E1B4B]">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,#818CF8,#6366F1)]">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        </div>

        <div>
          <div className="font-medium text-[17px] text-white tracking-[-0.2px]">
            Job Tracker
          </div>

          <div className="text-[11px] text-[#818CF8]">
            Track your applications
          </div>
        </div>
      </div>

      <button
        onClick={onAddClick}
        className="text-[13px] font-medium bg-[#6366F1] transition-all duration-200 hover:scale-105 active:scale-95 text-white px-4.5 py-2 rounded-lg cursor-pointer"
      >
        + Add Job
      </button>
    </div>
  );
};

export default Navbar;
