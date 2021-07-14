import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
    const req = {data:null,loading:true,error:null};
    const isMounted = useRef(true);
    // let isMounted = true;
    const [state, setState] = useState(req);

    useEffect(() => {
        return () =>{
            isMounted.current = false;
            // isMounted = false;
        }
    },[]);

    useEffect(() => {
        setState(req);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                    // if (isMounted) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    } else { console.log('No se llamó el quote'); }
                }, 4000);
            });
    }, [url]);

    return state;
}
