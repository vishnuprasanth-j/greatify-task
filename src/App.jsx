import "./App.css";
import Sidenav from "./components/sidenav";

import Header from "./components/header";
import Dashboard from "./pages/dashboard";
import { Route,BrowserRouter as  Router, Routes } from "react-router-dom";
import Degrees from "./pages/details";

function App() {
  return (
    <Router>
    <div className="flex app">
      <Sidenav />
      <div className="content">
        <div className="border border-gray-200  w-full rounded-lg mt-5 ">
            <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/degrees" element={<Degrees />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
