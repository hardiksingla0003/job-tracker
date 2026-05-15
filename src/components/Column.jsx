import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";
import { Send, Trophy, Users, X } from "lucide-react";

const STATUS_STYLES = {
  Applied: {
    Icon: Send,
    iconBg: "bg-blue-50",
    nameColor: "text-blue-700",
    badgeBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  Interview: {
    Icon: Users,
    iconBg: "bg-amber-50",
    nameColor: "text-amber-700",
    badgeBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  Offer: {
    Icon: Trophy,
    iconBg: "bg-green-50",
    nameColor: "text-green-700",
    badgeBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  Rejected: {
    Icon: X,
    iconBg: "rose-50",
    nameColor: "text-red-700",
    badgeBg: "bg-rose-100",
    iconColor: "text-red-500",
  },
};

const Column = ({ status, jobs, onDelete, onEdit }) => {
  const { setNodeRef } = useDroppable({ id: status });
  const filteredJobs = jobs.filter((job) => job.status === status);
  const s = STATUS_STYLES[status];
  const Icon = s.Icon;
  return (
    <div
      ref={setNodeRef}
      className="bg-violet-50 rounded-xl p-3 flex flex-col min-h-[60vh] border-[0.5px] border-[rgba(99,102,241,0.1)]"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${s.iconBg} ${s.iconColor}`}
          >
            <Icon size={14} />
          </div>

          <span className={`font-medium text-sm ${s.nameColor}`}>{status}</span>
        </div>

        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${s.badgeBg} ${s.nameColor}`}
        >
          {filteredJobs.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-400 text-xs  py-10 border-2 border-dashed border-gray-200 rounded-xl">
            <p>No Jobs in {status}</p>
            <p className="text-[10px] mt-1">Start adding applications</p>
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
