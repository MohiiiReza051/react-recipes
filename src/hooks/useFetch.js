import { useState, useEffect } from "react";

const useFetch = (url, method = 'GET') =>
{
  const [isLoading, setIsLoading] = useState(false);
  const [resJson, setResJson] = useState(null);
  const [err, setErr] = useState(false);
  const [options, setOptions] = useState(null);

  const postData = data =>
  {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
  
  const fetchData = async (fetchOptions) =>
  {
    setIsLoading(true);
    try {
      const res = await fetch(url, {...fetchOptions});
      setResJson(await res.json());
      setIsLoading(false);
      setErr(false);
    }  catch (err) {
      setIsLoading(false);
      setErr(true)
    }
  }
  
  useEffect(() => {
    fetchData(method === 'POST' && options && options);
  }, [url, method, options]);
  
  return [ isLoading, err, resJson, postData ];
}
export { useFetch }