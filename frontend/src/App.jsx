import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      {/* ToastContainer */}
      <ToastContainer />
    </>
  );
}

export default App;
