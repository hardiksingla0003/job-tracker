export const LOCAL_STORAGE_KEYS = {
  JOBS: "jobs",
};

export const ACTIONS = {
  ADD_JOB: "ADD_JOB",
  DELETE_JOB: "DELETE_JOB",
  UPDATE_JOB: "UPDATE_JOB",
  MOVE_JOB: "MOVE_JOB",
};

export const STATUSES = ["All", "Applied", "Interview", "Offer", "Rejected"];

export const DATE_FILTERS = [
  { value: "All", label: "All Time" },
  { value: "Today", label: "Today" },
  { value: "7", label: "Last 7 Days" },
  { value: "30", label: "Last 30 Days" },
];
export const STATUS_STYLES = {
  Applied: {
    bg: "bg-blue-100",
    color: "text-blue-700",
    active: "bg-blue-500",
    border: "border-blue-500",
  },
  Interview: {
    bg: "bg-amber-100",
    color: "text-amber-700",
    active: "bg-amber-500",
    border: "border-amber-500",
  },
  Offer: {
    bg: "bg-green-100",
    color: "text-green-700",
    active: "bg-green-500",
    border: "border-green-500",
  },
  Rejected: {
    bg: "bg-rose-100",
    color: "text-red-700",
    active: "bg-red-500",
    border: "border-red-500",
  },
};

export const STATUS_BADGE = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-amber-100 text-amber-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-rose-100 text-red-700",
};

export const INITIAL_COLORS = {
  Applied: "bg-blue-50 text-blue-700",
  Interview: "bg-amber-50 text-amber-700",
  Offer: "bg-green-50 text-green-700",
  Rejected: "bg-rose-50 text-red-700",
};

export const TOAST_STYLES = {
  className:
    "!bg-indigo-950 !text-white !text-[13px] !border-[0.5px] !border-[rgba(129,140,248,0.3)] !rounded-xl",
  iconTheme: {
    primary: "#818CF8",
    secondary: "#1E1B4B",
  },
};
