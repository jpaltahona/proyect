import React, { Component } from 'react';
import Title from './Title';

import './App.css';

class App extends Component {

    constructor() {
        super();
    
        this.state = {
            task: ['tarea 1', 'tarea 2', 'tarea 3']
        }
    }
    
    addTask(){
        this.setState({
            task: this.state.task.concat('nuevo elemento')
        })
    }

    updateTask(){
        const index = this.state.task.findIndex(task => task === "tarea 1");

        this.setState({
            task: this.state.task.map((task, i) =>
                i === index ? 'actaulizado' : task
            )
        })
    }

  render() {

    return (
      <div>
        <h3>Hola mundo</h3>
        <ul>
            {this.state.task.map((task, index) =>
                <li key={index}>{task}</li>)}
        </ul>
        <button onClick={this.addTask.bind(this)}>Agregar nuevo</button>
        <button onClick={this.updateTask.bind(this)}>Modificar</button>
      </div>
    );
  }

}

export default App;
