import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": "f7088f9852mshb513e8e0f8a3984p18507cjsn3ea43bd18b96",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    console.log("1");
    try {
      const response = await axios.request(options);
      console.log("2");
      setData(response.data.data);
      console.log("3");
    } catch (error) {
      console.log("4");
      setError(error);
      console.log("5");
      alert("There is an error");
      console.log("6");
    } finally {
      console.log("7");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("8");
    fetchData();
    console.log("9");
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  console.log("10");
  return { data, isLoading, error, refetch };
};

export default useFetch;
