import React from 'react';
import Sky from 'react-sky';
import laptop from '../assets/crazy.webp'


function DynamicSky()
{ 
    return (
        <Sky
            images={{
            0: laptop
            }}
            how={30}
            time={60}
            size={'50px'} />    
    );
}

export default DynamicSky;