import React from 'react';

export const Small = React.memo(
({value}) => {
    console.log('ME volvieron a llamar :\'(');

    return (
        <small>{value}</small>
    )
}
);