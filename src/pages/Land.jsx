import React, {useState, useEffect} from "react";
import './Land.css';

function Land() {
  return (
    <main className = "body">
      <h1>Welcome to Kataruse's Basic Website</h1>
      <ul>
        <li><b><a href="https://www.youtube.com/channel/UCqZ4-SrJiIRRmTympkLDkyA">Youtube</a></b></li>
        <li><b><a href="https://www.twitch.tv/kataruse">Twitch</a></b></li>
        <li><b><a href="https://twitter.com/Kataruse1">Twitter</a></b></li>
        <li><b><a href="https://discord.com/channels/@Kataruse#7939">Discord</a></b></li>
        <li><b><a href="https://github.com/Kataruse">Github</a></b></li>
      </ul>
    </main>
  );
}

export default Land;