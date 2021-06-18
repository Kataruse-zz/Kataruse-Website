import React from 'react'
import './Header.css'

export default function Header({title, handleNav}) {
    return (
        <header>
            <h1><a onClick={() => handleNav(0)}>{title}</a></h1>
            <nav>
                <ul>
                    <li><a onClick={() => handleNav(0)}>Home</a></li>
                    <li><a onClick={() => handleNav(1)}>My Projects</a></li>
                    <li><a onClick={() => handleNav(2)}>Blogs</a></li>
                    <li><a onClick={() => handleNav(3)}>Cool People</a></li>
                </ul>
            </nav>
        </header>
    );
}