export const LOCAL_STORAGE_KEYS = {
  JOBS: "jobs",
};

export const ACTIONS = {
  ADD_JOB: "ADD_JOB",
  DELETE_JOB: "DELETE_JOB",
  UPDATE_JOB: "UPDATE_JOB",
  MOVE_JOB: "MOVE_JOB",
};

export const JOB_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
};

export const STATUSES = ["All", "Applied", "Interview", "Offer", "Rejected"];

export const DATE_FILTERS = [
  { value: "All", label: "All Time" },
  { value: "Today", label: "Today" },
  { value: "7", label: "Last 7 Days" },
  { value: "30", label: "Last 30 Days" },
];
