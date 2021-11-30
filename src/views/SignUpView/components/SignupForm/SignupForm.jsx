import { useState } from 'react';

export function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    clearInput();
  };

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={name}
          id="name"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={onInputChange}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={password}
          id="password"
          onChange={onInputChange}
        />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
