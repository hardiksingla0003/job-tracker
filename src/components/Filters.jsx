import { Search } from "lucide-react";
import { DATE_FILTERS, STATUSES } from "../constants";

const Filters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  dateFilter,
  setDateFilter,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-4 mt-8">
      <div className="relative flex-3">
        <Search
          className="absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]"
          size={16}
        />
        <input
          type="text"
          placeholder="Search companies, roles..."
          className="bg-white pl-9 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none w-full border-[0.5px] border-[rgba(99,102,241,0.15)] text-[13px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className="bg-white px-4 py-2.5 rounded-xl text-gray-600 border-[0.5px] outline-none border-[rgba(99,102,241,0.15)] text-[13px] flex-1"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <select
        className="bg-white px-4 py-2.5 rounded-xl text-gray-600 border-[0.5px] outline-none border-[rgba(99,102,241,0.15)] text-[13px] flex-1"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        {DATE_FILTERS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
