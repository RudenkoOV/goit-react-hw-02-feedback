import { Text } from 'components/Feedback.styled';

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