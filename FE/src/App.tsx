import React from 'react';
import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
import GridPage from './screens/GridPage';
import PaymentsPage from './screens/PaymentsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Grid Page</Link>
            </li>
            <li>
              <Link to="/payments">Payments Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route  path="/" element={<GridPage/>} />
          <Route path="/payments" element={<PaymentsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;