import React, { useState, useEffect } from 'react';
import * as H from "./styles";

export interface IHomeProps {};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [data, setData] = useState(null);

    useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        const data = await fetch("https://randomuser.me/api/");

        const json = await data.json();

        setData(json);
      };

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [])


    return (

        <H.Container>
          <h1>Home Page</h1>
          {console.log(data)}
        </H.Container>

    );
}

export default Home;