import React, { Component } from 'react';
import Title from './Title';

import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            name: 'juan',
            terms: false
        }
    }

    updateName(event){
        this.setState({
            name: event.target.value
        });
    }
    updateTerms(event){
        this.setState({
            terms: event.target.checked
        });
    }

    sayHI(){
     if(this.state.terms){
        alert('hola ' + this.state.name)
     }   else{
         alert('deves aceptar los terminos')
     }
        
    }

  render() {

    return (
      <div>
        <h2>Formularios</h2>
        <input type="text"  placeholder={this.state.name} onChange={this.updateName.bind(this)}/>
        <div>
            <label>
                <input type="checkbox"checked={this.state.terms} onChange={this.updateTerms.bind(this)}/> acepto los terminos y condiciones
            </label>
        </div>
        <button onClick={this.sayHI.bind(this)}>Say HI!</button>
      </div>
    );
  }

}

export default App;
