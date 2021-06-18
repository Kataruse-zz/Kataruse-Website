import React, {useState, useEffect} from "react";
import LandingPage from "./pages/LandingPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import BlogsPage from "./pages/BlogsPage";
import CoolPeoplePage from "./pages/CoolPeoplePage";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

    const handleNav = (page) => {
        setCurrentPage(page)
    }

  return (
     <>
        <Header title="Kataruse's Website" handleNav={handleNav} />
        {currentPage == 0 && (<LandingPage />)}
        {currentPage == 1 && (<MyProjectsPage />)}
        {currentPage == 2 && (<BlogsPage />)}
        {currentPage == 3 && (<CoolPeoplePage />)}
    </>)
}

export default App;