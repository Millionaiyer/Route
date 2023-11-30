import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NoMatch from "./Pages/NoMatch.jsx";
import Jewelery from "./Pages/Jewelery.jsx";
import Electronics from "./Pages/Electronics.jsx";
import MenClothing from "./Pages/MenClothing.jsx";
import WomenClothing from "./Pages/WomenClothing.jsx";
import CardDetails from "./Components/CardDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/menClothing" element={<MenClothing />} />
        <Route path="/womenClothing" element={<WomenClothing />} />
        <Route path="/products/:id" element={<CardDetails />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
