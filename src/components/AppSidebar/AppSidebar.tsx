import { Link } from "react-router-dom";

const AppSidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src="logo.png" alt="WebAssistantX Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/message">Message</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/tasks">Task Management</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/finance">Personal Finance</Link>
        </li>
        <li>
          <Link to="/health">Health and Wellness</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AppSidebar;
