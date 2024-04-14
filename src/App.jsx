import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Accomplishments from "./pages/Accomplishments.jsx";
import Philanthropy from "./pages/Philanthropy.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
      </Routes>
    </Router>
  );
}

export default App;
