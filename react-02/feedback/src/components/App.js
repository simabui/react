import { Component } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from './Button';
import Statisctics from './Statistics';
import Total from './Total';
import PositiveFeedback from './PositiveFeedback';
import Notification from './Notification';

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
const ButtonList = css`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
const positive = css`
  background-color: #3aaa3f;
`;
const neutral = css`
  background-color: #ffbb00;
`;
const negative = css`
  background-color: #ff0000;
`;
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
    let isShown = false;
    const total = this.countTotalFeedback();
    // show statisctic if total not empty
    if (total > 0) isShown = true;

    return (
      <div css={Container}>
        <h1 css={Title}>Please leave feedback</h1>
        <div css={ButtonList}>
          <Button callback={this.countStat} css={positive}>
            good
          </Button>
          <Button callback={this.countStat} css={neutral}>
            neutral
          </Button>
          <Button callback={this.countStat} css={negative}>
            bad
          </Button>
        </div>
        <h2>Statistics</h2>
        {isShown ? (
          <ul>
            {/* li component */}
            <Statisctics obj={this.state} />
            <Total callback={this.countTotalFeedback} />
            <PositiveFeedback callback={this.countPositiveFeedbackPercentage} />
          </ul>
        ) : (
          <Notification>No feedback given</Notification>
        )}
      </div>
    );
  }
}

export default App;
