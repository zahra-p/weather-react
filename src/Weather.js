import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner"

export default function Weather (props){
function handleResponse(response){
    alert(`The weather in ${props.city} is ${response.data.main.temp}ºc`);

}

let units = "metric";
    let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);



    return (
<Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />

    );
}