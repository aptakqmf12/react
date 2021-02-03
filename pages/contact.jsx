import React from "react";

class BusinessName extends React.Component{
  constructor(props){
    super(props);
    this.state = { brand:"개발자의 품격", region:'제주'};
  }
  changeBrand = ()=>{
    this.setState({ brand : 'gogo'});
  }

  render(){
    return(
      <div>
        <h1>{this.state.brand}</h1>
        <button type="button" className="btn btn-primary" onClick={this.changeBrand}>change!</button>

      </div>
    )
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <BusinessName  />
        <ul className="list-group">
          <li className="list-group-item">menu</li>
          <li className="list-group-item">menu</li>
          <li className="list-group-item">menu</li>
          <li className="list-group-item">menu</li>
          <li className="list-group-item">menu</li>
        </ul>
      </div>
    )
  }
}

export default Contact;
