import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const req = {data:null,loading:true,error:null};
    const [state, setState] = useState(req);

    useEffect(() => {
        setState(req);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    }, [url]);

    return state;
}
