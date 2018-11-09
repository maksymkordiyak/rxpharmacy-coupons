export const DATA_AVAILABLE = "DATA_AVAILABLE";
import Data from "../__mocks__/testData.json";

export function getData() {
  return dispatch => {
    // Make Fake API Call
    setTimeout(() => {
      const {data} = Data;
      dispatch({type: DATA_AVAILABLE, data});
    }, 2000);
  };
}
