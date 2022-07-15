import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryPage(props) {
 
  const [country1, setCountry] = useState([]);
  const params = useParams();
  const countryId = params.countriesId;

  console.log("idd before use effect",countryId)
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
      console.log("response.data", response.data);
      const country1 = response.data.find((country) => {
      
          return country.alpha3Code === countryId;
      });
      if (country1) {
          setCountry(country1);
        }





      });
  }, []);




















  /*
    useEffect(() => {
  
      const country1 = countries.find((country) => {
      
          return country.alpha3Code === countryId;
      });
      if (country1) {
          setCountry(country1);
        }
    
      
    }, [countryId]);
  */
 
  return (
    <div class="col-7">
      <h1>{country1.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td >Capital</td>
            <td>{country1.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country1.area}km
              {country1.borders[0]}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country1.borders.map((elem) => {
                return (<a href={"/countries/" + elem}> 
                <li>{elem}</li> 
                </a>
                )
                })}


              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>






  )
}
export default CountryPage;