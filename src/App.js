import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./Components/CityComponent";
import WeatherComponent from './Components/WeatherComponent'
import axios from 'axios'
import particlesJS  from 'tsparticles'

const API_KEY='fe4feefa8543e06d4f3c66d92c61b69c'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  align-items:center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 5px;
  width:400px;
  background:white;
  font-family:Poppins;
`;
const AppLabel = styled.span`
  color:black;
  font-size:20px;
  font-weight:bold;
`;

function App() {

 
  const [city,setCity]=useState();
  const[weather,setWeather]=useState();

  const fetchWeather=async(e)=>{
    e.preventDefault();
   
   const response= await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    
      setWeather(response.data)
    

  }
  return (
    <Container>
     
      <AppLabel>Weather Informer</AppLabel>

      {weather? <WeatherComponent weather={weather}/>:
      <CityComponent  setCity={setCity}  fetchWeather={fetchWeather}/>}

    </Container>
  );
}

export default App;
