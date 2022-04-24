import React from "react";
import { State } from "@src/reducers/state";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import history from "@src/constants/History";
import { homeRoute } from "@src/routes";
import { UserDetailsState } from "@src/pages/home/reducers/state";
import Header from "@src/pages/dashboard/components/Header";

const styles = () =>
  createStyles({
    cardRoot: {
      margin: "16px 0"
    }
});

interface Props {
  classes?: any
  user: UserDetailsState
}

const Dashboard = React.memo<Props>(({classes, user}) => {
  React.useEffect(() => {
    if (user.name == "") {
      history.push(homeRoute)
    }
  }, [user, history]);

  return (
    <div>
      <Header/>
      <Card variant="outlined" classes={{root: classes.cardRoot}}>
        <CardContent>
          <Typography variant="h2" align="center">
            Welcome!!{" "}
            {user.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  user: state.user
});

export default connect<any, any, any>(mapStateToProps, null)(withStyles(styles)(Dashboard));
