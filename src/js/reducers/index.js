import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [{ title: "something different", id: "1234345" }]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case DELETE_ARTICLE:
      return { articles: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
