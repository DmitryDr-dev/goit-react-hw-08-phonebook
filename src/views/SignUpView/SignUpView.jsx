import { SignUpForm } from './components/SignupForm/SignupForm';
import { Container, Section, SectionTitle } from 'components';

function SignUpView() {
  return (
    <Section>
      <Container>
        <SectionTitle>Not a Member yet?</SectionTitle>
        <SignUpForm />
      </Container>
    </Section>
  );
}

export default SignUpView;
