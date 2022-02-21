import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChooseCityLable = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
  
`;
const SearchBox= styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
margin:20px auto;
& input{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold;
    
}
  
& button{
    padding:10px;
    font-size:15px;
    border:none;
    color:white;
    background-color:black;
    outline:none;
    font-weight:bold;
    cursor:pointer;
   
}
  
`;

function CityComponent(props) {
    const {setCity}=props;
    const {fetchWeather}=props;
  return (
    <>

   
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLable>Enter Your City.....</ChooseCityLable>

      <SearchBox onSubmit={fetchWeather}>
          <input placeholder="City" onChange={(e)=>setCity(e.target.value)}/>
          <button type="submit">Search</button>
      </SearchBox>
    </>
  );
}

export default CityComponent;
