import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Donaciones from "./components/Donaciones.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <>
      <div className=" bg-gray-50 min-h-screen flex flex-col w-full items-center">
        <NavBar />
        <Outlet />
      </div>
      <Donaciones />
      <Footer />
    </>
  );
}
