import { Container, Title } from 'components/Feedback.styled';
import PropTypes from 'prop-types';

export const Section = ({ title = 'Hello', children }) => {
    return (
        <>
            <Container>
                <Title>{title}</Title>
                <div>{children}</div>
            </Container>
        </>
    )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};