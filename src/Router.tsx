import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { History } from "./components/pages/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
