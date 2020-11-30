import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Topbar from "./Topbar";
import ResourceTable from "./ResourceTable";
import BundleTable from "./BundleTable";
import ProjectTable from "./ProjectTable";
import SimpleReactiveBarChart from "./SimpleReactiveBarChart";
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {
   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const backgroundShape = '</>';
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 15,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
});

class Main extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false,
    chartscope: 'all',
    asdata: [],
    asdata2: [],
    asdata3: [],
    dailyTrend: []
  };

  openDialog = event => {
    this.setState({ learnMoredialog: true });
  };

  dialogClose = event => {
    this.setState({ learnMoredialog: false });
  };

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true });
  };

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false });
  };

  handleChange = event => {
    var v = event.target.value;
    console.log(v);
    // var newState = (v === 'all' ? this.state.dailyTrendOrig[0] : v === '2wk' ? this.state.dailyTrendOrig[2] : this.state.dailyTrendOrig[1]);
    // //var newState = this.state.dailyTrendOrig[2];
    // this.setState({ chartscope: v, dailyTrend: newState });
  };

  componentDidMount() {
    fetch("http://localhost:8000/calcapp/projects/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ ...this.state, asdata: data })
    });
    fetch("http://localhost:8000/calcapp/bundles/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ ...this.state, asdata2: data}) 
      });
    fetch("http://localhost:8000/calcapp/resources/")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ ...this.state, asdata3: data })
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={2} alignItems="center" justify="center" container className={classes.grid}>             
            <Grid item xs={12} md={6}>
                <div>
                  <Typography style={{ textTransform: "uppercase" }} color="secondary" gutterBottom>
                    Projects
                  </Typography>
                  <ProjectTable rows={this.state.asdata}/>
                </div>
              </Grid>
              <Grid item xs={8} md={4}>
                <div>
                  <Typography style={{ textTransform: "uppercase" }} color="secondary" gutterBottom>
                    Bundles
                  </Typography>
                  <BundleTable rows={this.state.asdata2}/>
                </div>
              </Grid>
              <Grid item xs={8} md={4}>
                <div>
                  <Typography style={{ textTransform: "uppercase" }} color="secondary" gutterBottom>
                    Resources
                  </Typography>
                  <ResourceTable rows={this.state.asdata3}/>
                </div>
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className={classes.box}>
                        <Typography color="secondary" gutterBottom>
                          Forecast Utilization
                        </Typography>
                      </div>
                      <div>
                        <ResponsiveContainer width="99%" height={225}>
                          <LineChart width={600} height={300} data={this.state.dailyTrend}
                            margin={{
                              top: 5, right: 5, left: 5, bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis orientation="right"/>
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Tokyo" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="7dayAvg" stroke="#ff3344" dot={false} activeDot={false} />
                          </LineChart>                            
                        </ResponsiveContainer>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">Timeframe</FormLabel>
                          <RadioGroup name="tf" value={this.state.chartscope} onChange={this.handleChange} row >
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="3mo" control={<Radio />} label="3 Months" />
                            <FormControlLabel value="12mo" control={<Radio />} label="12 Months " />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
