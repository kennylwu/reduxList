import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import { loadState, saveState } from "../localStorage";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
// store.subscribe(() => {
//   saveState(store.getState());
// });

const store = createStore(
  rootReducer,
  //   persistedState
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
export default store;
