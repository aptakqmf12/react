import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  addValue = () => {
    this.setState({ value: this.value++ });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.addValue}>
          {this.state.value}
        </button>
      </div>
    );
  }
}
