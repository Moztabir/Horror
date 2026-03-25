import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter basename="/Horror">
      <Routes>
        <Route path="/" element={<div style={{ color: "white", padding: "40px" }}>Home works</div>} />
        <Route path="/about" element={<div style={{ color: "white", padding: "40px" }}>About works</div>} />
      </Routes>
    </BrowserRouter>
  );
}