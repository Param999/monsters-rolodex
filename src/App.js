import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            monsters: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json() )
        .then(data => this.setState({ monsters: data }))
    }

    render(){
        return(
            <div className="App">
                <input type='search' placeholder='search monster'/>
                <CardList monsters={this.state.monsters} />
            </div>
        )
    }
}

export default App;
