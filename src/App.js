import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            name: 'hey Param'
        }
    }
    render(){
        return(
            <div className="App">
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({name: 'hey Lax'})}>Change name</button>
            </div>
        )
    }
}

export default App;
