import { useDroppable } from "@dnd-kit/core";
import JobCard from "./JobCard";
import { Send, Trophy, Users, X } from "lucide-react";

const STATUS_STYLES = {
  Applied: {
    Icon: Send,
    iconBg: "#EFF6FF",
    nameColor: "#1D4ED8",
    badgeBg: "#DBEAFE",
    badgeText: "#1D4ED8",
    iconColor: "#3B82F6",
  },
  Interview: {
    Icon: Users,
    iconBg: "#FFFBEB",
    nameColor: "#B45309",
    badgeBg: "#FEF3C7",
    badgeText: "#B45309",
    iconColor: "#F59E0B",
  },
  Offer: {
    Icon: Trophy,
    iconBg: "#F0FDF4",
    nameColor: "#15803D",
    badgeBg: "#DCFCE7",
    badgeText: "#15803D",
    iconColor: "#22C55E",
  },
  Rejected: {
    Icon: X,
    iconBg: "#FFF1F2",
    nameColor: "#B91C1C",
    badgeBg: "#FFE4E6",
    badgeText: "#B91C1C",
    iconColor: "#EF4444",
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
      className="bg-[#F8F7FF] rounded-xl p-3 flex flex-col min-h-[60vh] border-[0.5px] border-[rgba(99,102,241,0.1)]"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{ background: s.iconBg }}
          >
            <Icon size={14} color={s.iconColor} />
          </div>

          <span className="font-medium text-sm" style={{ color: s.nameColor }}>
            {status}
          </span>
        </div>

        <span
          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
          style={{ background: s.badgeBg, color: s.badgeText }}
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
