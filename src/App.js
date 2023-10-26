import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
