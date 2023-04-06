import { Text } from 'components/Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ feedbacks, total, positivePercentage }) => {
    return (
        <div>
            {Object.keys(feedbacks).map(feedback => (
                <Text key={feedback}>
                    feedback: {feedbacks[feedback]}
                </Text>
            ))}
            <Text>Total:{total}</Text>
            <Text>Positive Feedback:{positivePercentage}</Text>
        </div>
    )
}

Statistics.propTypes = {
  feedbacks: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};