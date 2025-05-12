import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "@/index.css";
import App from "@/App.jsx";
import Home from "@/components/Home/home.jsx";
import AboutUs from "./components/About/about-us";
import Contact from "./components/Contact/contact";
import Disclaimer from "./components/Disclaimer/disclaimer";
import PrivacyPolicy from "./components/PrivacyPolicy/privacy-policy";
import TermAndContition from "./components/TermAndContition/term-and-contition";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/term-and-contition" element={<TermAndContition />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}>
    <App />
  </RouterProvider>
);
