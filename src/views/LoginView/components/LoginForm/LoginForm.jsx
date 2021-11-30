import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="email"
          value={password}
          onChange={onInputChange}
        />
      </label>
    </form>
  );
}
