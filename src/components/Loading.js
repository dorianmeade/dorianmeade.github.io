import React from 'react';
import Home from './Home.js'
import Spinner from './Spinner.js'

export default class Loading extends React.Component {
    constructor(props)
    {
       super(props)
       this.state = 
       {
          done: undefined
       }
    }

    componentDidMount()
    {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
        }, 4500);
    }   

    render(){
       return(
        <div>
            {!this.state.done ? ( <Spinner/> ) : (  <Home/> )}
        </div>
       )
    }
 }