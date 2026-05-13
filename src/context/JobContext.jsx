import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { jobReducer } from "./jobReducer";
import { ACTIONS } from "../constants";
import { LOCAL_STORAGE_KEYS } from "../constants";

export const JobContext = createContext(null);

const JobProvider = ({ children }) => {
  const [storedJobs, setStoredJobs] = useLocalStorage(
    LOCAL_STORAGE_KEYS.JOBS,
    [],
  );
  const [jobs, dispatch] = useReducer(jobReducer, storedJobs);

  useEffect(() => {
    setStoredJobs(jobs);
  }, [jobs, setStoredJobs]);

  const addJob = useCallback((jobData) => {
    const newJob = {
      ...jobData,
      id: jobData.id ?? Date.now(),
      createdAt: jobData.createdAt ?? new Date().toISOString(),
    };
    dispatch({ type: ACTIONS.ADD_JOB, payload: newJob });
  }, []);

  const deleteJob = useCallback((id) => {
    dispatch({ type: ACTIONS.DELETE_JOB, payload: id });
  }, []);

  const updateJob = useCallback((job) => {
    dispatch({ type: ACTIONS.UPDATE_JOB, payload: job });
  }, []);

  const moveJob = useCallback((id, status) => {
    dispatch({ type: ACTIONS.MOVE_JOB, payload: { id, status } });
  }, []);

  const value = useMemo(
    () => ({ jobs, addJob, deleteJob, updateJob, moveJob }),
    [jobs, addJob, deleteJob, updateJob, moveJob],
  );
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used inside a JobProvider");
  }
  return context;
};

export default JobProvider;
