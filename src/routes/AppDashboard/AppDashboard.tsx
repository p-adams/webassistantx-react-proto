import { Link } from "react-router-dom";
import "./AppDashboard.css";
function AppDashboard() {
  return (
    <section className="app-dashboard">
      <div className="app-grid">
        <div className="app-item">
          <Link to="/message">Message</Link>{" "}
        </div>
        <div className="app-item">
          <Link to="/calendar"></Link> Calendar
        </div>
        <div className="app-item">
          <Link to="/tasks">Task Management </Link>
        </div>
        <div className="app-item">
          <Link to="/notes">Notes</Link>
        </div>
        <div className="app-item">
          <Link to="/contacts">Contacts</Link>
        </div>
        <div className="app-item">
          <Link to="/finance">Personal Finance</Link>
        </div>
        <div className="app-item">
          <Link to="/health">Health and Wellness</Link>
        </div>
        <div className="app-item">
          <Link to="/news">News</Link>
        </div>
      </div>
    </section>
  );
}

export default AppDashboard;
