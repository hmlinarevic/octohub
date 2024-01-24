// react
import ReactDOM from "react-dom/client";

// components
import Layout from "./components/layout/layout"

// router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// app
import App from "./App.jsx";
import "./index.css";

// pages
import NotFound404 from "./pages/404.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Layout>
      <Router>
        <Routes>
          {/* for the home route "/" -> redirect to /contacts */}
          <Route path="/" element={<Navigate to="/contacts" replace />} />

          <Route path="/contacts" element={<App />} />
          <Route path="/companies" element={<App />} />

          {/* catch-all route for a resource not found */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </Layout>
);
