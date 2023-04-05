import React from "react";
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
