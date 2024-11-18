import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Projects } from "./components/Pages";

export default function Routings() {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}
