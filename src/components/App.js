import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Notifi } from './Notification/Notifi';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';
import { Sections } from './Sections/Sections';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  feedbackPercentage = () => {
    const totalFeedbacksNumber = this.totalFeedback();
    if (totalFeedbacksNumber === 0) {
      return 0;
    }

    return Math.floor((this.state.good / totalFeedbacksNumber) * 100);
  };

  render() {
    const total = this.totalFeedback();

    return (
      <>
        <Sections title="Please leave feedback">
          <Buttons
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Sections>
        <Sections title="Statistics">
          {total === 0 ? (
            <>
              <Notifi message="There is no feedback" />
            </>
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.totalFeedback()}
              positivePercentage={this.feedbackPercentage()}
            />
          )}
        </Sections>
        <GlobalStyle />
      </>
    );
  }
}
