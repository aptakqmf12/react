import React from "react";

class Props extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>name Props : {this.props.name}</h1>{" "}
        <h2>number Props : {this.props.number}</h2>{" "}
        <div>children Props : {this.props.children}</div>
      </div>
    );
  }
}

Props.defaultProps = {
  name: "taewan!",
};

class PropsRender extends React.Component {
  render() {
    return (
      <Props name={this.props.name} number={5}>
        {" "}
        Hellow!{" "}
      </Props>
    );
  }
}

export default Props;
export { PropsRender };
