import AppSidebar from "../components/AppSidebar/AppSidebar";
import "./App.css";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <nav className="header">
        <Link to="/">WebAssistantX Demo</Link>
      </nav>
      <AppSidebar />
      <div className="main">
        <Outlet />
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
