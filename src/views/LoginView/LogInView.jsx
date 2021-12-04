import { LoginForm } from 'views/LoginView/components/LoginForm/LoginForm';
import { Container, Section, SectionTitle } from 'components';

export function LoginView() {
  return (
    <Section>
      <Container>
        <SectionTitle>We've missed You</SectionTitle>
        <LoginForm />
      </Container>
    </Section>
  );
}
