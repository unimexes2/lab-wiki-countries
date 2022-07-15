import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
function CountriesList  (props) {
  const [countries, setCountry] = useState([]);


  // This effect depends on `props.projects`.
  // It will run on initial render and every time

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log("response.data", response.data);
        setCountry([...response.data]);
         
      });
  }, []);


  






  
  
 // console.log(countries)
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxheight:"300px",
  
    overflow: 'scroll',
     
  };

  return (
<div>
<div className="col-5" style={{mystyle}}>
            <div className="list-group"style={{mystyle}}>
           
            {countries.map((country) => {
      let flag= country.alpha2Code.toLowerCase()
    
    flag='https://flagpedia.net/data/flags/icon/72x54/'+flag +'.png'
    let href="/countries/"+country.alpha3Code
   console.log(href,"href")
    
        return (   
            <div>
         
            <a className="list-group-item list-group-item-action" href={href}><img src={flag}/> 
            
            
            
            {country.name.official}</a>
            </div>    
        );
      
      })}
             
             
           
              
            </div>
</div>
</div>
)
}

export default CountriesList ;
