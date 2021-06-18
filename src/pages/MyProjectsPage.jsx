import React, {useState, useEffect} from "react";
import './MyProjectsPage.css';

function MyProjectsPage() {
  return (
    <main className="projectbody">
      <h1 className="title">My Projects</h1>
      <h2 className="subtitle">Below is all the projects I've worked on</h2>
      <a href="https://github.com/Kataruse/Kataruse-Website" target="_blank"><h3 className="projectlink">My Personal Website</h3></a>
      <a href="https://kataruse-website.kataruse.repl.co/" target="_blank"><img src="./src/imgs/Kweb.png" className="projects"/></a>
      <a href="https://github.com/Kataruse/Coding-I-React-REST-API-Project-dbcs" target="_blank"><h3 className="projectlink">Coding I Pokemon Pokedex</h3></a>
      <a href="https://013-react-rest-api-project-dbcs-2.kataruse.repl.co/" target="_blank"><img src="./src/imgs/Pdex.png" className="projects"/></a>
      <a href="https://013-CollaborationBattleSnake-Starter-dbcs-1.dbcs.repl.co" target="_blank"><h3 className="projectlink">Coding I Battlesnake</h3></a>
      <img src="./src/imgs/snak.gif" className="projectnolink"/>
      <a href="https://github.com/Kataruse/Coding-I-Weather-App" target="_blank"><h3 className="projectlink">Coding I Weather App</h3></a>
      <a href="https://weather-app-2.kataruse.repl.co/" target="_blank"><img src="./src/imgs/Wapp.png" className="projects"/></a>
      <a href="https://github.com/Kataruse/Coding-I-PinBoard" target="_blank"><h3 className="projectlink">Coding I Pinboard Project</h3></a>
      <a href="https://011-frontend-development-pinboard-kataruse.dbcs.repl.co/" target="_blank"><img src="./src/imgs/pboard.png" className="projects"/></a>
      <a href="https://github.com/Kataruse/Coding-I-Github-Slideshow" target="_blank"><h3 className="projectlink">Coding I Personal Slideshow</h3></a>
      <a href="a" target="_blank"><img src="a" className="projects"/></a>
    </main>
  );
}

export default MyProjectsPage;