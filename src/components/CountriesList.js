import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function CountriesList  (props) {
  const [countries, setCountry] = useState(props.countries);

  // This effect depends on `props.projects`.
  // It will run on initial render and every time

  
  console.log(countries)
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxheight:"90vh",
     overflow:"scroll"
  };

  return (
<div>
<div className="col-5" style={{mystyle}}>
            <div className="list-group">
           
            {countries.map((country) => {
        return (   
           
                    
        );
      })}
             
             
           
              
            </div>
</div>
</div>
)
}

export default CountriesList ;
