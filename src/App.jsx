import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CombatPage from "./pages/CombatPage";
import MapPage from "./pages/MapPage"

export const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <HomePage/>}
      {page === "map" && <MapPage/>}
      {page === "combat" && <CombatPage/>}
       

      <Footer />
    </>
  );
};

