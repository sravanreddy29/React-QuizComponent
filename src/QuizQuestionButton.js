import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={"QuizQuestionButton "}>
        <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
