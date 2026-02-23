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
    <div className="p-4 mt-6 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <input
          type="text"
          placeholder="Search Jobs..."
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <select
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/4"
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
    </div>
  );
};

export default Filters;
