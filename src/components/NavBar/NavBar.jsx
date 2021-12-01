import { AuthNav, UserMenu } from 'components';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</header>;
}
