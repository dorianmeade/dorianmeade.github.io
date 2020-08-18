import React from 'react';
//import DynamicSky from '../components/DynamicSky.js'
import Body from '../components/Modal.js'

export default class Loading extends React.Component {
                         
  render(){
    return(
      <div> 
        <Body className="popin"/>   
      </div>
    )
  }
}