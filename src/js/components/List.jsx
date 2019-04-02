import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

import { state } from "../reducers/index";

// const mapStateToProps = state => {
//   debugger;
//   if (state === undefined) {
//     return {};
//   }
//   return { articles: state.articles };
// };

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  };
};
const mapStateToProps = state => {
  console.log(state);
  return { articles: state.articles };
};

class ConnectedList extends Component {
  constructor() {
    super();
    this.state = [];
  }
  // componentDidMount() {
  //   debugger;
  //   console.log("props", this.props);
  //   this.setState({ articles: this.props.articles }, () =>
  //     console.log("didMount", this.state.articles)
  //   );
  // }
  componentDidUpdate() {
    console.log("updated");
  }
  deleteArticle(e, i) {
    //e.preventDefault();
    //this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.index);
    //this.props.deleteArticle({})
  }

  render() {
    //const { articles } = this.state;
    //console.log("render", articles);
    return (
      <ul className="list-group list-group-flush">
        {this.props.articles === undefined
          ? []
          : this.props.articles.map((el, i) => (
              <li className="list-group-item" key={el.id} index={i}>
                {el.title}
              </li>
            ))}
      </ul>
    );
  }
}

const List = connect(
  mapStateToProps
  //mapDispatchToProps
)(ConnectedList);
export default List;

// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
// const ConnectedList = ({ articles }) => (

//   <ul className="list-group list-group-flush">
//     {articles === undefined
//       ? []
//       : articles.map(el => (
//           <li className="list-group-item" key={el.id}>
//             {el.title}
//             <button
//               type="button"
//               className="btn btn-secondary btn-danger btn-lg float-right"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//   </ul>
// );
// const List = connect(mapStateToProps)(ConnectedList);
// export default List;
