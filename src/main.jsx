import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteInfoPage from "./Pages/RouteInfoPage";
import Layout from "./layout/Layout";
import CreateRoutePage from "./Pages/CreateRoutePage";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="info" element={<RouteInfoPage />} />
        <Route index element={<CreateRoutePage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
