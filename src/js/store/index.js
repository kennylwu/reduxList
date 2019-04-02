import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import { loadState, saveState } from "../localStorage";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);
// store.subscribe(
//   throttle(
//     () => {
//       saveState({ articles: store.getState().articles });
//     },
//     2000
//     //saveState({ rootReducer: store.getState(), rootReducer });
//   )
// );

store.subscribe(() => {
  saveState({
    articles: store.getState().articles
  });
});
export default store;
