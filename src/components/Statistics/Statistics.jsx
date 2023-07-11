import Sections from 'components/Sections/Sections';
import CountBadFeedback from './CountBadFeedback';
import CountGoodFeedback from './CountGoodFeedback';
import CountNeutralFeedback from './CountNeutralFeedback';
import CountPositiveFeedbackPercentage from './CountPositiveFeedbackPercentage';
import CountTotalFeedback from './CountTotalFeedback';
import Notification from './Notification';
import PropTypes from 'prop-types';

const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <Sections title="Statistics">
      {Boolean(total) ? (
        <ul>
          <CountGoodFeedback good={state.good} />
          <CountNeutralFeedback neutral={state.neutral} />
          <CountBadFeedback bad={state.bad} />
          <CountTotalFeedback total={total} />
          <CountPositiveFeedbackPercentage
            positivePercentage={positivePercentage}
          />
        </ul>
      ) : (
        <Notification />
      )}
    </Sections>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
}.isRequired;

export default Statistics;
