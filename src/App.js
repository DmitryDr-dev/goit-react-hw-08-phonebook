import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components';
import authOperations from 'redux/auth/auth-operations';
import { HomeView, SignUpView, LoginView } from 'views';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </div>
  );
}

export default App;
