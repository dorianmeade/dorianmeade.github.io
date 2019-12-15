import React from 'react';

function HelloWorld(props)
{
    const { name } = props;
    
    return (
        <h>{name}</h>
    );
}

export default HelloWorld;