import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components';
import authOperations from 'redux/auth/auth-operations';
import contactsOperations from 'redux/contacts/contacts-operations';
// import { SignUpView, LoginView, ContactsView } from 'views';
import { PrivateRoute, PublicRoute } from 'routes';
import './styles/index.css';
import './styles/variables.css';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home"*/),
);

const SignUpView = lazy(() =>
  import('./views/SignUpView/SignUpView' /* webpackChunkName: "signup"*/),
);

const LogInView = lazy(() =>
  import('./views/LogInView/LogInView' /* webpackChunkName: "login"*/),
);

const ContactsView = lazy(() =>
  import('./views/ContactsView/ContactsView' /* webpackChunkName: "contacts"*/),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />

      <Suspense fallback={<h1>Loading profile...</h1>}>
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
                <LogInView />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
