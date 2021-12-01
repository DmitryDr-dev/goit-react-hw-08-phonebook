import { NavLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <div className="">
      <NavLink to="signup">Sign Up</NavLink>
      <NavLink to="login">Login</NavLink>
    </div>
  );
}
