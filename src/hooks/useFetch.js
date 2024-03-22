import { useState, useEffect, useCallback } from "react";

const useFetch = url =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [resJson, setResJson] = useState(null);
    const [err, setErr] = useState(null);
    
    const fetchData = useCallback(async () =>
    {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(res.statusText)
      
        setResJson(await res.json());
        setIsLoading(false);
        setErr(null);
      }  catch (err) {
        setIsLoading(false);
        setErr(err.message)
      }
    }, [url])
    
    useEffect(() => {
      fetchData() 
    }, []);
    
    return { isLoading, err, resJson };
}
export { useFetch }