import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [{ title: "something different", id: "1234345" }]
};

function rootReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    //return { articles: action.payload };
    case DELETE_ARTICLE:
      return { articles: action.payload };
    default:
      return state;
  }
}

export default rootReducer;

// function rootReducer(state = initialState, action) {
//     debugger;
//     console.log(state);
//     console.log(action.payload);
//     if (action.type === ADD_ARTICLE) {
//       return Object.assign({}, state, {
//         articles: state.articles.concat(action.payload)
//       });
//     }
//     //   if (action.type === DELETE_ARTICLE) {
//     //     return Object.assign({}, state, {
//     //       articles: state.articles.concat(action.payload)
//     //     });
//     //   }
//     return state;
//   }
// export default rootReducer;
