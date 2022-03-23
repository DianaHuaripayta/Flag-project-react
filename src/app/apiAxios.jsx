import { useState, useEffect } from "react";


const ApiAxios = (_) => {
  const [countries, setCountries] = useState([]);
 useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      return response.json()
        // console.log(res.data)
        // setCountries(res.data)
    })
    .then((data) => {
      // return res.json()
      
      setCountries(data)
      console.log(data)
    })
    .catch(error => {
      // setCountries({ errorMessage: error.message });
      console.log('There was an error!', error);
    });
  }, []);  
  
  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.com/v3.1/all`)
  //     .then((res) => {
  //         console.log(res.data)
  //         setCountries(res.data)
  //     })
  //     .catch(error => {
  //       setCountries({ errorMessage: error.message });
  //       console.error('There was an error!', error);
  //     });

  // }, []);   

  return (
    <div>
        { 
        countries.map(({common, population, fifa}) => {// destructorar lod datos del api
               return <div key={common}>
                 <p >{common}</p>
                 <p>{population}</p>
                 <p>{fifa}</p>
               </div>
            })
        }

    </div>
  )
};
export default ApiAxios;