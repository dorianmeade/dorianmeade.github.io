import React from 'react';
import Sky from 'react-sky';
import sparkle from '../assets/sparkly.gif'
import pink from '../assets/pink.gif'
import sparkles from '../assets/sparkles.gif'


function DynamicSky()
{ 
    return (
        <Sky
            images={{
            0: sparkle,
            1: pink,
            2: sparkles
            }}
            how={70}
            time={120}
            size={'100px'} />    
    );
}

export default DynamicSky;