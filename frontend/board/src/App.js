import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "React App",
    };
  }

    render() {
    return <div>{this.state.message}</div>;
  }
}

export default App;
