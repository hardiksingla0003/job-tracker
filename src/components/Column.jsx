import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";

const Column = ({ status, jobs, onDelete, onEdit }) => {
  const { setNodeRef } = useDroppable({ id: status });
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div
      ref={setNodeRef}
      className="bg-white rounded-xl shadow-sm p-4 flex flex-col min-h-[60vh]"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-700">{status}</h2>
        <span className="text-sm text-gray-400">{filteredJobs.length}</span>
      </div>

      <div className="flex flex-col gap-3">
        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-400 text-sm  py-10 border-2 border-dashed border-gray-200 rounded-lg transition-all duration-300">
            <p>No Jobs in {status}</p>
            <p className="text-xs mt-1">Start adding applications</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
