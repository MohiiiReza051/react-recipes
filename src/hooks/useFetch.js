import { useState, useEffect, useCallback } from "react";

const useFetch = url =>
{
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
    
    const fetchData = useCallback(async () =>
    {
      setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(res.statusText)
    
      const resJson = await res.json();
      console.log(resJson);
      setIsLoading(false);
      setErr(null);
    }  catch (err) {
      setIsLoading(false);
      setErr(err.message)
      }
    }, [url])

    useEffect(() => { fetchData() }, [url]);
}
export { useFetch };
// export { isLoading, err, resJson }