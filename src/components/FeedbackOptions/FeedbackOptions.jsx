import React from "react";
import PropTypes from 'prop-types';

import { Button, FeedbackButton } from 'components/Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, btnNames }) => {
    return (
         <Button>
            {btnNames.map(btnName => (
                <FeedbackButton type="button" key={btnName} onClick={() => onLeaveFeedback(btnName)}> {btnName} </FeedbackButton>))
            }
        </Button>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};