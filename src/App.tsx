import React from 'react';
import './App.css';
import Header from "./heder/Header";
import Main from "./main/Main";
import Skills from "./skils/Skills";
import MyWorks from "./my works/MyWorks";
import { Distant } from './distant/Distant';
import { Contacts } from './contacts/Contacts';
import {Footer} from "./footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Distant/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
