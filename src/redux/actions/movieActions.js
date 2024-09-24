import { ActionTypes } from "../actionTypes";
import api from "../../utils/api";

export const getPopular = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVIE_LOADING,
  });

  const params = {
    region: "TUR",
  };
  api
    .get("/movie/popular", { params })
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIE_ERROR,
        payload: err.message,
      })
    );
};
