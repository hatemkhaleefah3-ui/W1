import {
  FiHome,
  FiUser,
  FiMessageCircle,
  FiCalendar,
  FiFolder,
  FiSettings
} from "react-icons/fi";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <h2 className="logo">
        Portfolio
      </h2>

      <nav>

        <a className="active">
          <FiHome />
          Home
        </a>

        <a>
          <FiUser />
          Profile
        </a>

        <a>
          <FiMessageCircle />
          Messages
        </a>

        <a>
          <FiCalendar />
          Calendar
        </a>

        <a>
          <FiFolder />
          Projects
        </a>

        <a>
          <FiSettings />
          Settings
        </a>

      </nav>

    </aside>

  );
}