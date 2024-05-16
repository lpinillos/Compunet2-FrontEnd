import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import { LoginPage } from './screens/LoginPage';
import { Register } from './screens/Register';
import { HomePage } from './screens/HomePage';
import { PlanView } from './screens/PlanView';
import { InfoPlanView } from './screens/InfoPlanView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/HomePage' element={<HomePage/>}/>
        <Route path='/PlanView' element={<PlanView/>}/>
        <Route path='/InfoPlanView' element={<InfoPlanView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
