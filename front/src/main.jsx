import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);










// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
// import Login from "./components/Pages/Login.jsx";
// import Register from "./components/Pages/Register.jsx"; 
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />        {/* default login page */}
//         <Route path="/register" element={<Register />} /> {/* register page */}
//         <Route path="/home" element={<App />} />     {/* portfolio/home page */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
