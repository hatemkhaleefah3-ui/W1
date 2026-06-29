import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <Navbar />

        <div className="content">

          <div className="placeholder">
            Dashboard Content
          </div>

        </div>

      </main>

    </div>
  );
}