import React, {Component} from 'react';

//const Title = (props) => <h1>{props.name} Hola mundo</h1>;

class Title extends Component {
  constructor(props){
      super(props)
  }
    render() {
        return(
            <hi>{this.props.name}</hi>
        )
    }
}

export default Title;