import {useState, useEffect} from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [urlDelete, setUrlDelete] = useState(url);

  const httpConfig = (data, method) => {
    if(method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setMethod(method);
    }

    if(method === "DELETE") {

      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setUrlDelete((prevUrl) => prevUrl+"/"+data.id);
      setMethod(method);
    }
  };

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {

        const res = await fetch(url);
        const json = await res.json();
        setData(json);

      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados");
      }

      setLoading(false);

    };

    fetchData();

  }, [url, callFetch]);

  useEffect(() => {

      const httpRequest = async () => {

      if(method === "POST") {

        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);

      };

      if(method === "DELETE") {
        
        const res = await fetch(urlDelete, config);
        const json = await res.json();

        setUrlDelete(url);
        setCallFetch(json);

      };

    };

    httpRequest();

  }, [config, method, url]);

  return {data, httpConfig, loading, error};

};