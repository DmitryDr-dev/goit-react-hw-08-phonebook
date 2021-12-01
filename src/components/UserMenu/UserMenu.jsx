import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getName } from 'redux/auth/auth-selectors';

export function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  return (
    <div className="">
      <span>Добро пожаловать, {userName}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.userLogOut())}
      >
        Выйти
      </button>
    </div>
  );
}
