import { NavBar } from 'components';
import { Routes, Route } from 'react-router-dom';
import { HomeView, SignUpView, LoginView } from 'views';

function App() {
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
