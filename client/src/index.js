import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <App />
      </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
