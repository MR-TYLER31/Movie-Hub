import React, { useState, useEffect } from 'react';
import * as H from "./styles";

export interface IHomeProps {};



const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [data, setData] = useState();

    useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        const response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=aadd8ead"
        );

        const json = await response.json();
        setData(json);
        
      };

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])


    return (

        <H.Container>
          <h1>Hello</h1>
          {console.log(data)}
        </H.Container>

    );
}

export default Home;