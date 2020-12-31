import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import DynamicSky from "./DynamicSky"



function SparkleSwitch(){ 

    const [bkgd, setBkgd] = useState('sparkles off');

    return (
        <div>
            <Button onClick={() => setBkgd(bkgd === 'sparkles off' ? 'sparkles on' : 'sparkles off')} variant="outline-secondary" className="btn">{bkgd}</Button>

            {bkgd === 'sparkles on' ? 
                <DynamicSky/>
                : null}
        </div>
    );
}

export default SparkleSwitch;