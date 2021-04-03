import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "./Buttons";
import rite_aid from "/Users/chenjianyu/Desktop/Github/findVax/my-app/src/imgs/rite_aid.png";
import albertsons from "/Users/chenjianyu/Desktop/Github/findVax/my-app/src/imgs/albertsons.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  let time =
    props.clinic.properties.appointments_last_fetched.slice(0, 10) +
    " " +
    props.clinic.properties.appointments_last_fetched.slice(11, 19) +
    "+0000";
  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }
  time = String(convertTZ(time, "America/Los_Angeles")).slice(4, 21);
  let all_dose = props.clinic.properties.appointments_available_all_doses
    ? "ok"
    : "no";

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={rite_aid} />
            </ButtonBase>
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  {props.clinic.properties.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.clinic.properties.address}
                  {", "}
                  {props.clinic.properties.city}{" "}
                  {props.clinic.properties.postal_code}
                </Typography>
              </Grid>
              <Grid item>
                <a
                  variant="body2"
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  href={props.clinic.properties.url}
                  target="_blank"
                >
                  <Button />
                </a>
              </Grid>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontSize: "12px" }}
              >
                Last updated on {JSON.stringify(time)} PDT
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  );
}
