import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DetailForm from "@src/pages/home/components/DetailForm";

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(10)
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: "40%"
    }
  });

interface Props {
  classes?: any
}

const Home = React.memo<Props>(props => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center">
          User Details
        </Typography>
        <DetailForm/>
      </Paper>
    </div>
  );
});

export default withStyles(styles)(Home);
