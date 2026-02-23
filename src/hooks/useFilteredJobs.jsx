import { useMemo } from "react";

const useFilteredJobs = ({
  jobs,
  debouncedSearch,
  statusFilter,
  dateFilter,
}) => {
  return useMemo(() => {
    if (!Array.isArray(jobs)) return [];

    return jobs.filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.role.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || statusFilter === job.status;
      let matchesDate = true;
      if (dateFilter !== "All") {
        const jobDate = new Date(job.createdAt);
        const now = new Date();
        if (dateFilter === "Today") {
          matchesDate = now.toDateString() === jobDate.toDateString();
        } else {
          const daysAgo = new Date();
          daysAgo.setDate(now.getDate() - Number(dateFilter));
          matchesDate = jobDate >= daysAgo;
        }
      }
      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [jobs, debouncedSearch, statusFilter, dateFilter]);
};

export default useFilteredJobs;
