import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords

    // Cuando trabajamos con useEffect y montamos listeners hay que
    // removerlos en la seccion de limpieza (clean up) porque
    // puede traer serios problemas de consumo de memoria
    // porque a pesar de ser desmontado el componente
    // el listener no se borra
    useEffect(() => {
        // console.log('componente montado')
        // Para remover el listener hay que poner el callback en una variable
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove',mouseMove);
        
        // Este return es para limpieza y se dispara cuando se desmonta el componente.
        return () => {
            // console.log('componente desmontado')
            window.removeEventListener('mousemove',mouseMove);
        }
    }, []);

    return (
        <>
            <h3>Eres genial...!</h3>
            <p>x:{x} y:{y}</p>
        </>
    )
}
