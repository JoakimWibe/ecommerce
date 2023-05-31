import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import "react-toastify/ReactToastify.css"
import { useStoreContext } from "./context/StoreContext";
import { useEffect, useState } from "react";
import { getCookie } from "./util/util";
import agent from "./api/agent";
import Loading from "./components/layout/Loading";

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      agent.Basket.get()
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket])

  if (loading) return <Loading message="Initialising app..." />

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
