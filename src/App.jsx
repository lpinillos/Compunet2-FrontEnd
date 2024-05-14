import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { LoginPage } from './screens/LoginPage';
import { Register } from './screens/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
