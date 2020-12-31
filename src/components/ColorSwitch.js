import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button'
import {ThemeContext} from '../context/colorScheme'

function ColorSwitch(props){ 

    const [color, setColor] = useState('dark mode');
    const {dispatch} = useContext(ThemeContext);

    return (
        <div>
            <Button onClick={() => {
                setColor(color === 'dark mode' ? 'light mode':  'dark mode');
                if (color === 'dark mode') {
                    dispatch({'type':'dark'})
                }
                else {
                    dispatch({'type':'light'})
                }
            }} variant="outline-secondary" className="btn">{color}</Button>

        </div>
    );
}

export default ColorSwitch;