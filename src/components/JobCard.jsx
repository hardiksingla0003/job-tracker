import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Calendar, GripVertical } from "lucide-react";
import formatDate from "../utils/formatDate";

const STATUS_BADGE = {
  Applied: "bg-[#DBEAFE] text-[#1D4ED8]",
  Interview: "bg-[#FEF3C7] text-[#B45309]",
  Offer: "bg-[#DCFCE7] text-[#15803D]",
  Rejected: "bg-[#FFE4E6] text-[#B91C1C]",
};

const INITIAL_COLORS = {
  Applied: "bg-[#EFF6FF] text-[#1D4ED8]",
  Interview: "bg-[#FFFBEB] text-[#B45309]",
  Offer: "bg-[#F0FDF4] text-[#15803D]",
  Rejected: "bg-[#FFF1F2] text-[#B91C1C]",
};

const JobCard = ({ job, onDelete, onEdit }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="bg-white p-4 rounded-xl transition-all duration-100 ease-in-out hover:shadow-md hover:scale-[1.02] flex flex-col gap-2 touch-none border-[0.5px] border-[rgba(99,102,241,0.1)]"
    >
      <div className="flex items-start gap-2">
        <div
          className={`${INITIAL_COLORS[job.status]} w-9 h-9 flex items-center justify-center rounded-xl font-medium shrink-0`}
        >
          {job.company.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {job.company}
          </h3>
          <p className="text-xs text-gray-500 truncate">{job.role}</p>
        </div>

        <div
          {...listeners}
          {...attributes}
          className="cursor-grab text-gray-400 mt-0.5 shrink-0"
        >
          <GripVertical size={18} />
        </div>
      </div>

      <span
        className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${STATUS_BADGE[job.status]}`}
      >
        {job.status}
      </span>

      <div className="flex items-center justify-between pt-2 border-t-[0.5px] border-[#F3F4F6]">
        {job.createdAt && (
          <p className="text-xs text-gray-400 flex gap-1 items-center">
            <Calendar size={11} />
            {formatDate(job.createdAt)}
          </p>
        )}
        <div className="flex gap-3 ml-auto">
          <button
            onClick={() => onEdit(job)}
            className="text-blue-500 text-sm transition-colors hover:text-blue-700 cursor-pointer"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(job.id)}
            className="text-red-500 text-sm transition-colors hover:text-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
