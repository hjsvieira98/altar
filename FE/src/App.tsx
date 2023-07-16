import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GridPage from "./screens/GridPage";
import PaymentsPage from "./screens/PaymentsPage";
import { Text } from "@mantine/core";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: "flex", gap: "16px", listStyle: "none" }}>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Text>Grid Page</Text>
              </Link>
            </li>
            <li>
              <Link to="/payments" style={{ textDecoration: "none" }}>
                <Text>Payments Page</Text>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<GridPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
