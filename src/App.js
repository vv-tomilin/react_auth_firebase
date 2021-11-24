import { Routes, Route } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage } from './pages';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
