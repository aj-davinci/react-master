import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppBar, Grid, Link, Toolbar, Typography } from "@material-ui/core";
import history from "@src/constants/History";
import { postsRoute, usersRoute } from "@src/routes";

const styles = () =>
  createStyles({
    appBarRoot: {
      alignItems: "center"
    },
    typographyButton: {
      fontWeight: "bold",
      fontSize: 16
    }
  });

interface Props {
  classes?: any
}

const Header: React.FC<Props> = props => {
  const { classes } = props;

  return(
    <AppBar position="static" color="inherit" classes={{ root: classes.appBarRoot }}>
      <Toolbar variant="dense">
        <Grid container spacing={2}>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => history.push(usersRoute)}
              underline="none"
            >
              <Typography classes={{button: classes.typographyButton}} variant="button">Users</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link
              component="button"
              variant="body2"
              onClick={() => history.push(postsRoute)}
              underline="none"
            >
              <Typography classes={{button: classes.typographyButton}} variant="button">Posts</Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
