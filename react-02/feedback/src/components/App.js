import { Component } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Statisctics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const Title = css`
  text-align: center;
  margin: 0;
`;
const Container = css`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.2;
  max-width: 1100px;
  margin: 0 auto;
`;

const buttonOptions = [
  { type: 'good', color: '#3aaa3f' },
  { type: 'neutral', color: '#ffbb00' },
  { type: 'bad', color: '#ff0000' },
];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countStat = e => {
    // button name
    const { innerText } = e.target;
    this.setState(state => {
      return {
        // change property in state
        [innerText]: state[innerText] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    // obj to arr and loop
    const totalFeedbacks = Object.keys(this.state).reduce((total, key) => {
      return total + this.state[key];
    }, 0);
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = +this.countTotalFeedback();
    const percent = Math.ceil((good / totalFeedbacks) * 100);
    return percent;
  };

  render() {
    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div css={Container}>
        <h1 css={Title}>Please leave feedback</h1>
        <FeedbackOptions
          options={buttonOptions}
          onLeaveFeedback={this.countStat}
        />
        <Statisctics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={totalPositive}
        />
      </div>
    );
  }
}

export default App;
