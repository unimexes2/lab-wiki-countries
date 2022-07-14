import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom";
import countriesData from "./countries.json";

function App() {
  
  
  
  return <div className="App">
 <Navbar />
 <CountriesList countries={countriesData} />


 <Routes>
 <Route
          path="/countries"
          element={<CountriesList countries={countriesData} />}
        />

 <Route path="/countries/:countriesId" element={<CountriesList/>} />

 </Routes>

  </div>;
}
export default App;