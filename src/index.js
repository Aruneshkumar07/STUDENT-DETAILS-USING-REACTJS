import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './Header.js';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer.js';
import Content from './Table.js';
import Forms from './Forms.js';

function Result(){
    return(
        <div>
            <Nav/>
            <Content />
            <Forms/>
            <Footer/>
        </div>
    )
}
ReactDOM.render(<Result/>,document.getElementById("root"));