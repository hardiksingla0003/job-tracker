const Navbar = ({ onAddClick }) => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center mb-5">
      <h1 className="text-2xl font-bold text-gray-800">Job Tracker</h1>
      <button
        onClick={onAddClick}
        className="bg-blue-600 transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm"
      >
        + Add Job
      </button>
    </div>
  );
};

export default Navbar;
