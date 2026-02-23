import { useContext, useState } from "react";
import AddJobModal from "../components/AddJobModal";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { JobContext } from "../context/JobContext";
import useDebounce from "../hooks/useDebounce";
import Analytics from "../components/Analytics";
import Filters from "../components/Filters";
import Board from "../components/Board";
import useFilteredJobs from "../hooks/useFilteredJobs";
import EmptyState from "../components/EmptyState";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const { jobs, addJob, deleteJob, updateJob, moveJob } =
    useContext(JobContext);

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
    const jobStatus = over.id;

    const job = jobs.find((job) => job.id === jobId);
    if (!job || job.status === jobStatus) return;
    moveJob(jobId, jobStatus);
  };
  const filteredJobs = useFilteredJobs({
    jobs,
    debouncedSearch,
    statusFilter,
    dateFilter,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAddClick={() => setShowModal(true)} />

      <Stats jobs={jobs} />
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
          onDelete={deleteJob}
          onEdit={handleEditJob}
          onDragEnd={handleDragEnd}
        />
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
