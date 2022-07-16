import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function CountryPage(props) {
  const [countries, setCountry] = useState([]);
  const params = useParams();
  const countryId = params.countriesId;

  // This effect depends on `props.projects`.
  // It will run on initial render and every time

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        // console.log("response.data", response.data);
        setCountry([...response.data]);

      });
  }, []);


  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxheight: "300px",

    overflow: 'scroll',

  };

  return (
    <div>
      <div className="col-5" style={{ mystyle }}>
        
          {countries.map((country) => {
            if (country.alpha3Code === countryId) {


              let flag = country.alpha2Code.toLowerCase()

              flag = 'https://flagpedia.net/data/flags/icon/72x54/' + flag + '.png'
              let href = "/countries/" + country.alpha3Code

              return (
                <div>

                  <div className="col-7">
                    <h1>{country.name.common}</h1>
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td >Capital</td>
                          <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                          <td>Area</td>
                          <td>
                            {country.area}km
                            {country.borders[0]}
                            <sup>2</sup>
                          </td>
                        </tr>
                        <tr>
                          <td>Borders</td>
                          <td>
                            <ul>
                              {country.borders.map((elem) => {
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
                </div>
              );
            }
          })}




       
      </div>
    </div>
  )
}

export default CountryPage;













