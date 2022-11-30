//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function SimpleCounter (props) {
    return (
        <div className="bigCounter">
            <div className="reloj"><i class="fa-solid fa-clock"></i></div>
            <div className="cuatro">{props.digitoCuatro % 10}</div>
            <div className="tres">{props.digitoTres % 10}</div>
            <div className="dos">{props.digitoDos % 10}</div>
            <div className="uno">{props.digitoUno % 10}</div>
            
        </div>
    )

}

SimpleCounter.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    digitoCuatro: propTypes.number,
    digitoTres: propTypes.number,
    digitoDos: propTypes.number,
    digitoUno: propTypes.number
};

let counter = 0

setInterval(function(){
    const cuatro = Math.floor(counter/1000);
    const tres = Math.floor(counter/100);
    const dos = Math.floor(counter/10);
    const uno = Math.floor(counter/1);
    counter ++;

    ReactDOM.render(<SimpleCounter digitoUno={uno} digitoDos={dos} digitoTres={tres} digitoCuatro={cuatro}/>, 
    document.querySelector("#app"));
 
},1000);


