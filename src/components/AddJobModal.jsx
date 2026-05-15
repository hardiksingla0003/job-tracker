import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { STATUS_STYLES, STATUSES, TOAST_STYLES } from "../constants";

const AddJobModal = ({ onClose, onAdd, onUpdate, editingJob }) => {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setJob(
      editingJob ?? {
        company: "",
        role: "",
        status: "Applied",
      },
    );
  }, [editingJob]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!job.company.trim() || !job.role.trim()) {
      setError("Company and Role field are required*");
      return;
    }
    editingJob ? onUpdate(job) : onAdd(job);
    setError("");
    onClose();
    toast.success(
      `${editingJob ? "Job updated!" : "Job added!"}`,
      TOAST_STYLES,
    );
  };

  return (
    <div
      className="fixed inset-0 bg-[rgba(30,27,75,0.6)] backdrop-blur-sm flex items-center justify-center px-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center px-6 py-5 bg-[linear-gradient(135deg,#1E1B4B_0%,#4338CA_100%)]">
          <div>
            <h2 className="text-white text-lg font-semibold">
              {editingJob ? "Edit Application" : "New Application"}
            </h2>

            <p className="text-xs text-indigo-300 mt-0.5">
              {editingJob
                ? "Update the job details below"
                : "Fill in the details to track a new job"}
            </p>
          </div>

          <button
            onClick={() => onClose()}
            className="w-8 h-8 rounded-lg text-indigo-300 bg-[rgba(255,255,255,0.1)] flex items-center justify-center cursor-pointer transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-500 font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Google, Stripe, Vercel"
              className="w-full border-[0.5px] border-indigo-500/25 outline-none text-sm transition-all text-gray-800 px-4 py-2.5 rounded-xl bg-zinc-50"
              value={job.company}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-500 font-medium">Role</label>
            <input
              type="text"
              name="role"
              placeholder="e.g. Frontend Engineer, Product Designer"
              className="w-full border-[0.5px] border-indigo-500/25 outline-none text-sm transition-all text-gray-800 px-4 py-2.5 rounded-xl bg-zinc-50"
              value={job.role}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-500 font-medium">Status</label>

            <div className="grid grid-cols-4 gap-2">
              {STATUSES.map((status) => {
                if (status === "All") return;
                const s = STATUS_STYLES[status];
                const isSelected = job.status === status;
                return (
                  <button
                    name="status"
                    value={status}
                    key={status}
                    type="button"
                    onClick={handleChange}
                    className={`border-[1.5px] py-2 rounded-xl text-xs cursor-pointer font-medium transition-all duration-150 ${
                      isSelected
                        ? `${s.active} text-white ${s.border}`
                        : `${s.bg} ${s.color} border-transparent`
                    }`}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <p className="px-3 py-2 rounded-lg text-red-700 text-xs border-[0.5px] bg-rose-50 border-rose-100">
              {error}
            </p>
          )}
        </div>

        <div className="px-6 py-4 flex justify-end gap-3 border-t-[0.5px] border-gray-100">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 rounded-xl text-sm font-medium text-gray-500 cursor-pointer transition-all hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="text-white px-5 py-2 font-medium text-sm rounded-xl cursor-pointer bg-[linear-gradient(135deg,#6366F1,#4338CA)] transition-all hover:scale-105 active:scale-95"
          >
            {editingJob ? "Update Job" : "Add Job"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;
