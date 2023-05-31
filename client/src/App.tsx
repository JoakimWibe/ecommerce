import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import "react-toastify/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
