import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom";
//import countriesData from "./countries.json";
import CountryPage from "./components/CountryDetails";
import { useState, useEffect } from "react";
import axios from "axios";



function App() {
 
  const [countriesData , setCountry] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log("response.data", response.data);
        setCountry([...response.data]);
         console.log("llega",countriesData)
      });
  }, [countriesData]);

 
    
      
      return( <div className="App">
     <Navbar />
     <div className="MainScreen">
     <CountriesList countries={countriesData} />
    
    <div>
     <Routes>
     <Route
              path="/countries"
              element={<CountriesList countries={countriesData} />}
            />
    
    <Route path="/countries/:countriesId"  element={<CountryPage />} />
    
     </Routes>
     </div>
     </div>
      </div>)
    }












/*
function App() {
 
  const [countriesData , setCountry] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log("response.data", response.data);
        setCountry(response.data);
         console.log("llega",countriesData)
      });
  }, []);

return(
<div>
{countriesData[0].alpha2Code}


</div>

)



}
  
  return <div className="App">
 <Navbar />
 <div className="MainScreen">
 <CountriesList countries={countriesData} />

<div>
 <Routes>
 <Route
          path="/countries"
          element={<CountriesList countries={countriesData} />}
        />

 <Route path="/countries/:countriesId"  element={<CountryPage countries={countriesData}/>} />

 </Routes>
 </div>
 </div>
  </div>;
}*/

export default App;