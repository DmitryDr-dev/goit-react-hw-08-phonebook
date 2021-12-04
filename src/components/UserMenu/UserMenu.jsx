import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getName } from 'redux/auth/auth-selectors';
import { LogoutButton } from 'components';

export function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  return (
    <div className="">
      <span>Welcome, {userName}</span>
      <LogoutButton
        type="button"
        onClick={() => dispatch(authOperations.userLogOut())}
      >
        Log Out
      </LogoutButton>
    </div>
  );
}
