import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import authOperations from 'redux/auth/auth-operations';
import { FormField, FormInput, FormInputLabel, Button, Form } from 'components';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onUserLogin = userData => dispatch(authOperations.userLogin(userData));

  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const onInputChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onUserLogin({
      email,
      password,
    });
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <FormField>
          <FormInputLabel htmlFor={emailInputId}>Email</FormInputLabel>
          <FormInput
            type="text"
            name="email"
            placeholder="login@mail.com"
            id={emailInputId}
            value={email}
            onChange={onInputChange}
          />
        </FormField>

        <FormField>
          <FormInputLabel htmlFor={passwordInputId}>Password</FormInputLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="You secure password"
            id={passwordInputId}
            value={password}
            onChange={onInputChange}
          />
        </FormField>

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
