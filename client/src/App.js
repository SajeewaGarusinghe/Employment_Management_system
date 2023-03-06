import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './pages/EmployeeForm';
import DashBoard from './pages/DashBoard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<DashBoard />}></Route>
            <Route path="/form" element={<EmployeeForm />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
