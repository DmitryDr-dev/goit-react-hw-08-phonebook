import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { AuthNav, UserMenu, Navigation } from 'components';

const Header = styled.header`
  background-color: var(--primary-bg-color);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 3px solid var(--accent-color);
  position: fixed;
`;

export function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
