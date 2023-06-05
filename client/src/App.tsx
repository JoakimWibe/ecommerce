import { ToastContainer } from "react-toastify";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import "react-toastify/ReactToastify.css"
import { useEffect, useState } from "react";
import { getCookie } from "./util/util";
import agent from "./api/agent";
import Loading from "./components/layout/Loading";
import { useAppDispatch } from "./store/configureStore";
import { setBasket } from "./store/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch])

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
