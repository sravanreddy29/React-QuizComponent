import React, { Component } from "react";

import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
    this.handleClick =this.handleClick.bind(this)
  }

  handleClick(buttonText){
    buttonText === this.props.quiz_question.answer ? this.props.showNextQuestionHandler() : null
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className='buttons'>
          <ul>
            {this.props.quiz_question.answer_options.map((answer, index) => (
              <QuizQuestionButton key={index} button_text={answer} clickHandler ={this.handleClick.bind(this)} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
