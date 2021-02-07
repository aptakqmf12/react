import React from "react";

class Row extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
      </tr>
    )
  }
}

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {username : ''}; //SetState로 받을 값을 이곳에 할당
  }
  myChangeHandler = (evt) => {
    this.setState({username : evt.target.value});
  }
  doSave = () => {
    alert(this.state.username);
  }

  render() {
    let date = [{name: "A", email:"a"}, {name: "B", email:"b"}, {name: "C", email:"c"} ];
    let rows = date.map(row => (<Row name={row.name} email={row.email} />))
    return (
      <div>
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler}/> {/* 1. 폼객체에 onChange로 값을 받음 */}
        <button type="button" className="btn btn-primary" onClick={this.doSave}>저장</button>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      
    )
  }
}

export default About;
