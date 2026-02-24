import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
const JobCard = ({ job, onDelete, onEdit }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
  });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className="bg-gray-50 p-4 rounded-xl shadow-sm transition-all duration-100 ease-in-out hover:shadow-lg hover:scale-[1.03] flex flex-col gap-2 touch-none"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{job.company}</h3>
          <p className="text-sm text-gray-500">{job.role}</p>
        </div>
        <div
          {...listeners}
          {...attributes}
          className="cursor-grab text-gray-400"
        >
          <GripVertical size={18} />
        </div>
      </div>

      <div className="flex justify-end gap-3 ">
        <button
          onClick={() => onEdit(job)}
          className="text-blue-500 text-sm hover:text-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(job.id)}
          className="text-red-500 text-sm hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
