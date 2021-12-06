import { LoginForm } from 'views/LogInView/components/LoginForm/LoginForm';
import { Container, Section, SectionTitle } from 'components';

function LogInView() {
  return (
    <Section>
      <Container>
        <SectionTitle>We've missed You</SectionTitle>
        <LoginForm />
      </Container>
    </Section>
  );
}

export default LogInView;
