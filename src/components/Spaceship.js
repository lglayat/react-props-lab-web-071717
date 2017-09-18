// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'
class Spaceship extends React.Component {
  render(){
    return<div>
    <h2>{this.props.name}</h2>

        <img src={this.props.poster}></img>
        <h2>{this.props.speed}</h2>
        <small>Colors:{this.props.colors.join(', ')}</small>
      </div>
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}

export default Spaceship

ReactDOM.render(
  <Spaceship />,
  document.getElementById('root')
);
