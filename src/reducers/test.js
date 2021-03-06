import {DATA_AVAILABLE} from "../actions";

const initialState = {data: [], loading: true};

export default (state = initialState, {data, type}) => {
  switch (type) {
    case DATA_AVAILABLE:
      return {...state, ...{data, loading: false}};
    default:
      return state;
  }
};
