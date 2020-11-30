import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link as MaterialLink } from "@material-ui/core";

const logo = '</>';

const styles = theme => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  productLogo: {
    display: "inline-block",
    borderLeft: `1px solid ${theme.palette.grey["A100"]}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up("md")]: {
      paddingTop: "1.5em"
    }
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: "0.8em"
    }
  },
  iconContainer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  iconButton: {
    float: "right"
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto"
  }
});

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = event => {
    this.setState({ menuDrawer: true });
  };

  mobileMenuClose = event => {
    this.setState({ menuDrawer: false });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    if (this.props.currentPath === "/home") {
      return 0;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={10} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <a href="http://BundleCalc" className={classes.link}>
                    <img width={20} src={logo} alt="" />
                    <span className={classes.tagline}>BundleCalc</span>
                  </a>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Topbar));
