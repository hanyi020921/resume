import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResumeCN from "./ResumeCN";
import ResumeEN from "./ResumeEN";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/cn" element={<ResumeCN />} />
        <Route path="/en" element={<ResumeEN />} />
        <Route path="*" element={<Navigate to="/cn" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
