import { DndContext } from "@dnd-kit/core";
import Column from "./Column";
import { STATUSES } from "../constants";
const Board = ({ jobs, onDelete, onEdit, onDragEnd }) => {
  return (
    <DndContext onDragEnd={onDragEnd}>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATUSES.filter((status) => status !== "All").map((status) => (
          <Column
            key={status}
            status={status}
            jobs={jobs}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default Board;
