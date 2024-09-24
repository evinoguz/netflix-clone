import { ActionTypes } from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ActionTypes.MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: payload.results,
      };
    default:
      return state;
  }
};
export default movieReducer;
