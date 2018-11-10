import {SHOW_MENU, HIDE_MENU} from "../actions/types";

const initialState = {
  showMenu: false,
};

export default (state = initialState, {type}) => {
  switch (type) {
    case SHOW_MENU:
      return {
        ...state,
        showMenu: true,
      };
    case HIDE_MENU:
      return {
        ...state,
        showMenu: false,
      };
    default:
      return state;
  }
};
