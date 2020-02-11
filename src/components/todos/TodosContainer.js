import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

export class TodosContainer extends Component {
  renderTodos = () =>
    this.props.todos.map((todo, index) => <Todo key={index} text={todo} />);

  render() {
    // console.log(this);
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosContainer);
