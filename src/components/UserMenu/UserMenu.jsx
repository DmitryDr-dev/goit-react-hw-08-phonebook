import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import authOperations from 'redux/auth/auth-operations';
import { getName } from 'redux/auth/auth-selectors';
import { LogoutButton } from 'components';

export function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  return (
    <div className="">
      <Greeting>Welcome, {userName}</Greeting>
      <LogoutButton
        type="button"
        onClick={() => dispatch(authOperations.userLogOut())}
      >
        Log Out
      </LogoutButton>
    </div>
  );
}

const Greeting = styled.span`
  margin-right: 20px;
`;
