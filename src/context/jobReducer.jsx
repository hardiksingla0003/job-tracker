import { ACTIONS } from "../constants";
export const jobReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_JOB:
      return [action.payload, ...state];

    case ACTIONS.DELETE_JOB:
      return state.filter((job) => job.id !== action.payload);

    case ACTIONS.UPDATE_JOB:
      return state.map((job) =>
        job.id === action.payload.id ? { ...job, ...action.payload } : job,
      );

    case ACTIONS.MOVE_JOB:
      return state.map((job) =>
        job.id === action.payload.id
          ? { ...job, status: action.payload.status }
          : job,
      );

    default:
      return state;
  }
};
