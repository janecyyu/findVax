import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HealingIcon from "@material-ui/icons/Healing";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "rgb(0, 51, 130)", color: "white" }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HealingIcon />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            className={classes.title}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                textAlign: "center",
              }}
            >
              VaxBay
            </Link>
          </Typography>
          <Button color="inherit">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
