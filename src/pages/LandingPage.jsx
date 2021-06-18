import React, {useState, useEffect} from "react";
import './LandingPage.css';

function LandingPage() {
  return (
    <main className = "landingbody">
      <h1 className="title">Welcome!</h1>
      <ul>
        <il>
          <h2 className="subtitle">Current Project</h2>
        </il>
        <il>
          <a href="https://github.com/Kataruse/Kataruse-Website" target="_blank"><h3 className="myprojects">My Personal Website</h3></a>
          <a href="https://kataruse-website.kataruse.repl.co/" target="_blank"><img src="./src/imgs/Kweb.png" className="projects"/></a>
        </il>
      </ul>
      <h2 className="subtitle">Where to find me?</h2>
      <ul>
       <li><b><a href="https://github.com/Kataruse" target="_blank">Github</a></b></li>
        <li><b><a href="https://www.twitch.tv/kataruse" target="_blank">Twitch</a></b></li>
        <li><b><a href="https://www.youtube.com/channel/UCqZ4-SrJiIRRmTympkLDkyA" target="_blank">Youtube</a></b></li>
        <li><b><a href="https://twitter.com/Kataruse1" target="_blank">Twitter</a></b></li>
        <li><b><a href="https://steamcommunity.com/profiles/76561198094205647/" target="_blank">Steam</a></b></li>
        <li><b><a href="https://discord.com/channels/@Kataruse#7939" target="_blank">Discord</a></b></li>
      </ul>
    </main>
  );
}

export default LandingPage;