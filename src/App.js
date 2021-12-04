import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components';
import authOperations from 'redux/auth/auth-operations';
import contactsOperations from 'redux/contacts/contacts-operations';
import { HomeView, SignUpView, LoginView, ContactsView } from 'views';
import { PrivateRoute, PublicRoute } from 'routes';
import './styles/index.css';
import './styles/variables.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignUpView />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
