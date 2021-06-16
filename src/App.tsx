import React from 'react';
import './App.css';
import Header from "./heder/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import MyWorks from "./my works/MyWorks";
import { Distant } from './distant/Distant';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Distant/>

        </div>
    );
}

export default App;
