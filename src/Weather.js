import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${Math.round(
        response.data.temperature.current
      )}°C`
    );
  }

  let apiKey = "f388b055e9fa4ta275o3155340404ccb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      color="white"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
