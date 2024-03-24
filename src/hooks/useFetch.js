import { useState, useEffect, useCallback } from "react";

const useFetch = (url, method = 'GET') =>
{
  const [isLoading, setIsLoading] = useState(false);
  const [resJson, setResJson] = useState(null);
  const [err, setErr] = useState(null);
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
  
  const fetchData = useCallback(async (fetchOptions) =>
  {
    setIsLoading(true);
    try {
      const res = await fetch(url, {...fetchOptions});
      if (!res.ok)
        throw new Error(res.statusText)
    
      setResJson(await res.json());
      setIsLoading(false);
      setErr(null);
    }  catch (err) {
      setIsLoading(false);
      setErr(err.message)
    }

  }, [])
  
  useEffect(() => {
    fetchData(method === 'POST' && options && options);
  }, [url, method, options]);
  
  return [ isLoading, err, resJson, postData ];
}
export { useFetch }