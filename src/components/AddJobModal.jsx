import { useEffect, useState } from "react";
const AddJobModal = ({ onClose, onAdd, onUpdate, editingJob }) => {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
  });
  const [error, setError] = useState("");
  useEffect(() => {
    if (editingJob) {
      setJob(editingJob);
    } else {
      setJob({
        company: "",
        role: "",
        status: "Applied",
      });
    }
  }, [editingJob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setJob((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!job.company.trim() || !job.role.trim()) {
      setError("Company and Role field are required*");
      return;
    }
    editingJob ? onUpdate(job) : onAdd(job);
    setError("");
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 transition-opacity duration-300 ">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg transform transition-all duration-300 scale-100 opacity-100">
        <h2 className="text-xl font-semibold mb-4">
          {editingJob ? "Edit Job" : "Add New Job"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="border border-gray-300 p-2 rounded"
            value={job.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            className="border border-gray-300  p-2 rounded"
            value={job.role}
            onChange={handleChange}
          />
          <select
            name="status"
            value={job.status}
            onChange={handleChange}
            className="border border-gray-300  p-2 rounded"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-2 text-gray-600 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              {editingJob ? "Update Job" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobModal;
