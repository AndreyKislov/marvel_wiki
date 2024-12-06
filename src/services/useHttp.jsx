import {useCallback, useState} from 'react';
import FetchError from './FetchError.js';

export default function useHttp (){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = useCallback((async (url)=>{
        onLoading();
        const response = await fetch(url);
        if (!response.ok) {
            onError(response.statusText);
            throw new FetchError(`Could not fetch resource ${url}`, response.status);
        }
        const resource = await response.json();
        onData();
        return resource;
    }), []);

    const onError = useCallback((errorMessage) => {
        setError(errorMessage);
        setLoading(false);
    }, []);

    const onLoading = useCallback(()=>{
        setError(null);
        setLoading(true);
    }, []);

    const onData = useCallback(()=>{
        setLoading(false);
    },[]);
    
    return {loading, onLoading, error, onError, fetchData};
}