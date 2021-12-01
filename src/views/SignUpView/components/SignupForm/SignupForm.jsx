import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { v4 as uuidv4 } from 'uuid';

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

    onUserSignUp({
      name,
      email,
      password,
    });

    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor={emailInputId}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          id={emailInputId}
          onChange={onInputChange}
        />
      </label>

      <label htmlFor={passwordInputId}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          id={passwordInputId}
          onChange={onInputChange}
        />
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
}
