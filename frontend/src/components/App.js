import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("/calcapp/bundles/")
      .then(response => {
        if (response.status > 400) {
          console.log(">400");
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        else {
          console.log("got response: " + response)
          return response.json();
        }
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(bundle => {
          return (
            <li key={bundle.name}>
              {bundle.months} - {bundle.size} and add resources after via https://www.valentinog.com/blog/drf/
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
