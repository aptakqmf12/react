
import React from 'react'

class Props extends React.Component{
    render(){
      return(
        <div>
          <h1>name Props : {this.props.name}</h1>
          <h2>number Props : {this.props.number}</h2>
          <div>children Props : {this.props.children}</div>
        </div>
      );
    }
  }
  
  {/*Props.propTypes = {
    name: React.PropTypes.string,
    number: React.PropTypes.number.isRequired,
  };*/}

  Props.defaultProps = {
    name: 'taewan!'
  }
  
  class App extends React.Component{
    render(){
      return(
         <Props name={this.props.name} number={5} > Hellow! </Props>
      );
    }
  }
  
  ReactDOM.render(<App name="plz" /> , document.getElementById('root'));

  export default Props;