import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'f63084d2e7msh6104a79717b425fp10afbbjsnf91690c3e313',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
          ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request
            (options);
            setData(response.data.data);
            setIsLoading(false);
        }
        catch (error){
          console.log(error)
            setError(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
      }

      useEffect(()=> {
        fetchData();
      },[]);

      const refetch = () => { //if data is not loaded properly
        setIsLoading(true);
        fetchData();
      }

      return {data, isLoading, error, refetch}
}

export default useFetch