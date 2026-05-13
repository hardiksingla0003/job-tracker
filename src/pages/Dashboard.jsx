import { useState } from "react";
import AddJobModal from "../components/AddJobModal";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { useJobs } from "../context/JobContext";
import useDebounce from "../hooks/useDebounce";
import Analytics from "../components/Analytics";
import Filters from "../components/Filters";
import Board from "../components/Board";
import useFilteredJobs from "../hooks/useFilteredJobs";
import EmptyState from "../components/EmptyState";
import { X } from "lucide-react";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [dragToast, setDragToast] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);
  const { jobs, addJob, deleteJob, updateJob, moveJob } = useJobs();

  const handleDeleteJob = (id) => {
    const job = jobs.find((j) => j.id === id);
    if (!job) return;

    deleteJob(id);

    const timerId = setTimeout(() => {
      setPendingDelete(null);
    }, 5000);

    if (pendingDelete) {
      clearTimeout(pendingDelete.timerId);
    }

    setPendingDelete({ job, timerId });
  };

  const handleUndoDelete = () => {
    if (!pendingDelete) return;
    clearTimeout(pendingDelete.timerId);
    addJob(pendingDelete.job);
    setPendingDelete(null);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingJob(null);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;

    const jobId = active.id;
    const newStatus = over.id;

    const job = jobs.find((job) => job.id === jobId);

    if (!job || job.status === newStatus) return;

    moveJob(jobId, newStatus);

    const willBeHidden = statusFilter !== "All" && statusFilter !== newStatus;

    if (willBeHidden) {
      setDragToast({ company: job.company, newStatus });
      setTimeout(() => {
        setDragToast(null);
      }, 5000);
    }
  };

  const handleClearFilters = () => {
    setStatusFilter("All");
    setDateFilter("All");
    setSearchTerm("");
    setDragToast(null);
  };

  const filteredJobs = useFilteredJobs({
    jobs,
    debouncedSearch,
    statusFilter,
    dateFilter,
  });

  return (
    <div className="min-h-screen bg-[#EEEDF8]">
      <Navbar onAddClick={() => setShowModal(true)} />
      <Stats jobs={jobs} />

      <div className={`px-6 ${jobs.length === 0 ? "mt-4" : "-mt-8"}`}>
        {jobs.length !== 0 && <Analytics jobs={jobs} />}

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
        />

        {jobs.length === 0 && (
          <EmptyState
            title="No Jobs Added Yet"
            message="Click 'Add Job' to start tracking your applications."
          />
        )}
        {jobs.length > 0 && filteredJobs.length === 0 && (
          <EmptyState
            title="No matching jobs found"
            message="Try changing your search or filters"
          />
        )}

        {filteredJobs.length > 0 && (
          <Board
            jobs={filteredJobs}
            onDelete={handleDeleteJob}
            onEdit={handleEditJob}
            onDragEnd={handleDragEnd}
          />
        )}
      </div>

      {dragToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1E1B4B] text-white text-sm px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
          <span>
            <strong>{dragToast.company}</strong> moved to{" "}
            <strong>{dragToast.newStatus}</strong> - hidden by active filter
          </span>

          <button
            onClick={handleClearFilters}
            className="underline text-[#818CF8] whitespace-nowrap cursor-pointer"
          >
            Clear filters
          </button>

          <button
            onClick={() => setDragToast(null)}
            className="text-[#818CF8] hover:text-white ml-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {pendingDelete && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1E1B4B] text-white text-sm px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
          <span>
            <strong>{pendingDelete.job.company}</strong> deleted
          </span>
          <button
            onClick={handleUndoDelete}
            className="underline text-[#818CF8] whitespace-nowrap cursor-pointer"
          >
            Undo
          </button>
          <button
            onClick={() => {
              clearTimeout(pendingDelete.timerId);
              setPendingDelete(null);
            }}
            className="text-[#818CF8] hover:text-white ml-1 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {showModal && (
        <AddJobModal
          onClose={handleCloseModal}
          onAdd={addJob}
          onUpdate={updateJob}
          editingJob={editingJob}
        />
      )}
    </div>
  );
};

export default Dashboard;
