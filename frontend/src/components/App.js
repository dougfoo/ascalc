import React, { Component } from "react";
import { render } from "react-dom";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { blue, indigo } from '@material-ui/core/colors'
import Routes from './routes'
import './App.css';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false,
//       placeholder: "Loading"
//     };
//   }

//   componentDidMount() {
//     // const restServer = "/calcapp/bundles/";
//     const restServer = "http://localhost:8000/calcapp/projects/"
//     fetch(restServer)
//       .then(response => {
//         if (response.status > 400) {
//           console.log(">400");
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         else {
//           console.log("got response: " + response)
//           return response.json();
//         }
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.data.map(bundle => {
//           return (
//             <li key={bundle.name}>
//               Name: {bundle.name} - Months: {bundle.months} - Size: {bundle.size} - Resources: {bundle.resources}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

export default App;

// const container = document.getElementById("app");
// render(<App />, container);
