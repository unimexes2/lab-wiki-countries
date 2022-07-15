import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

function CountryPage (props) {
    const [countries] = useState(props.countries);
    const [country, setCountry] = useState(null);
  
    // This effect depends on `props.projects`.
    // It will run on initial render and every time
    // when the `props.projects` gets updated.
   
   // console.log("cont",countries);
  // const { projectId } = useParams();
  const params = useParams();

  const countryId = params.countriesId;
  
//  console.log("idd before use effect",countryId)
  

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
const country1 = countries.find((country) => {
   




    return country.alpha3Code === countryId;
});
  console.log(country1,"pais after use effect  ",countryId)
   
  
  
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
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {country1.borders.map((elem)=>{
 <li><a href="/">{elem}</a></li>
                    })}
                 
                 
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       
       
       
       
       
       
    )
  }
  export default CountryPage ;