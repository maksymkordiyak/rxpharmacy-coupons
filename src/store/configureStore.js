import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
// import FSStorage from "redux-persist-fs-storage";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers"; // Import the reducer

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return {store, persistor};
};
