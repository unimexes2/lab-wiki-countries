import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom";
import countriesData from "./countries.json";
import CountryPage from "./components/CountryDetails";
function App() {
  
  
  
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
}
export default App;