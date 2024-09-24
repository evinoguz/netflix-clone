import { thunk } from "redux-thunk";

import { combineReducers, createStore, applyMiddleware } from "redux";
import genreReducer from "./reducer/genreReducer";
import movieReducer from "./reducer/movieReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
