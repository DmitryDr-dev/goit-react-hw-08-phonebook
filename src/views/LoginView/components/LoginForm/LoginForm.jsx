import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={emailInputId}>
        Email
        <input
          type="text"
          name="email"
          id={emailInputId}
          value={email}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor={passwordInputId}>
        Password
        <input
          type="password"
          name="password"
          id={passwordInputId}
          value={password}
          onChange={onInputChange}
        />
      </label>
    </form>
  );
}
