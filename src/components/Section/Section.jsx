import { Container, Title } from 'components/Feedback.styled';

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