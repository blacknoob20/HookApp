import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const { author, quote } = !!data && data[0];
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">Loading...</div>
                    )
                :
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mb-0">{quote}</p><br/>
                            <footer className="fs-6 text blockquote-footer">{author}</footer>
                        </blockquote>
                    )
            }
        </div>
    )
}
