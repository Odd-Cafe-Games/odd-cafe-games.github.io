import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
    </Routes>
  );
}