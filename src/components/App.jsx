import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  goodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    return this.totalFeedback()
      ? Math.round(Number((this.state.good / this.totalFeedback()) * 100)) + '%'
      : null;
  };

  render() {
    return (
      <div className="container">
        <Buttons
          onGoodClick={this.goodClick}
          onNeutralClick={this.neutralClick}
          onBadClick={this.badClick}
        />
        <Statistics
          state={this.state}
          total={this.totalFeedback()}
          positivePercentage={this.positivePercentage()}
        />
      </div>
    );
  }
}
