import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import Message from "./routes/Message.tsx";
import Calendar from "./routes/Calendar.tsx";
import Tasks from "./routes/Tasks.tsx";
import Notes from "./routes/Notes.tsx";
import Contacts from "./routes/Contacts.tsx";
import Finance from "./routes/Finance.tsx";
import Health from "./routes/Health.tsx";
import News from "./routes/News.tsx";
import AppDashboard from "./routes/AppDashboard/AppDashboard.tsx";
import App from "./routes/App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <AppDashboard />, index: true },
      { path: "/message", element: <Message /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/notes", element: <Notes /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/finance", element: <Finance /> },
      { path: "/health", element: <Health /> },
      { path: "/news", element: <News /> },
    ],
  },
]);
