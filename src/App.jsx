import "./App.css";
import Sidenav from "./components/sidenav";
import Header from "./components/header";
import Dashboard from "./pages/dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Degrees from "./pages/details";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif', // Specify Poppins as the font family
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="flex app">
          <Sidenav />
          <div className="content">
            <div className="border border-gray-200 w-full rounded-lg mt-5">
              <Header />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/degrees" element={<Degrees />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
