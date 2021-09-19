import { without } from "lodash";
import { POST_TYPES } from "../types";

const selectedPostReducers = (state = {}, action) => {
  switch (action.type) {
    case POST_TYPES.SELECT_POST:
      return [...state, action.payload];
    case POST_TYPES.DESELECT_POST:
      return without(state, action.payload);
  }

  return state;
};

export default selectedPostReducers;
