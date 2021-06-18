import React, {useState, useEffect} from "react";
import './CoolPeoplePage.css';

function CoolPeoplePage() {
  return (
    <main className="coolbody">
      <h1 className="title">Cool People</h1>
      <h2 className="subtitle">This page links to cool people you should check out</h2>
      <img src="https://avatars.githubusercontent.com/u/77067133?v=4" className="people"/>
      <h3 className="user">ConeDome</h3>
      <a href="https://github.com/ConeDome" target="_blank"><h4 className="coollinks">Github</h4></a>
    </main>
  );
}

export default CoolPeoplePage;