import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { v4 as uuidv4 } from 'uuid';
import { FormField, FormInput, FormInputLabel, Button, Form } from 'components';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onUserSignUp = userData =>
    dispatch(authOperations.userSignUp(userData));

  const nameInputId = uuidv4();
  const emailInputId = uuidv4();
  const passwordInputId = uuidv4();

  const onInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        return;

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
    console.log(e);

    const contact = {
      name,
      email,
      password,
    };

    onUserSignUp(contact);

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormField>
        <FormInputLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            id={nameInputId}
            onChange={onInputChange}
          />
        </FormInputLabel>
      </FormField>

      <FormField>
        <FormInputLabel htmlFor={emailInputId}>
          Email
          <FormInput
            type="email"
            name="email"
            value={email}
            id={emailInputId}
            onChange={onInputChange}
          />
        </FormInputLabel>
      </FormField>

      <FormField>
        <FormInputLabel htmlFor={passwordInputId}>
          Password
          <FormInput
            type="password"
            name="password"
            value={password}
            id={passwordInputId}
            onChange={onInputChange}
          />
        </FormInputLabel>
      </FormField>

      <Button type="submit">Sign Up</Button>
    </Form>
  );
}
