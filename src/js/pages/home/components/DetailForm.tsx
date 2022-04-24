import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import history from "@src/constants/History";
import { State } from "@src/reducers/state";
import { UserDetailsState } from "@src/pages/home/reducers/state";
import { setUserDetails } from "@src/pages/home/actions";
import { dashboardRoute } from "@src/routes";

const styles = theme =>
  createStyles({
    fieldContainer: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column"
    },
    formGroup: {
      width: "auto",
      margin: theme.spacing(2),
      display: "flex"
    }
  });

interface Props {
  classes?: any;
  user?: UserDetailsState,
  setUserDetails?: ({}) => {}
}

const DetailForm = React.memo<Props>(props => {
  const { classes, user, setUserDetails } = props;
  const [error, setError] = React.useState({ name: false, email: false});

  const handleInputChange = React.useCallback((value, field) => {
    if(value) {
      setUserDetails({ [field]: value });
      setError(prev => ({ ...prev, [field]: false }))
    }
  }, [setUserDetails]);

  const handleButtonClick = React.useCallback(() => {
    if (user.name == "" || user.name.trim() == "") {
      setError(prev => ({ ...prev, name: true }))
    }
    if (user.email == "" || user.email.trim() == "") {
      setError(prev => ({ ...prev, email: true }))
    }

    if (user.email != "" && user.name != "") {
      history.push(dashboardRoute)
    }
  }, [user]);

  return (
    <div className={classes.fieldContainer}>
      <FormControl fullWidth className={classes.formGroup}>
        <TextField
          required
          label="Name"
          variant="outlined"
          onChange={e => handleInputChange(e.target.value, "name")}
          defaultValue={user.name}
          error={error.name}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formGroup}>
        <TextField
          required
          label="Email"
          variant="outlined"
          onChange={e => handleInputChange(e.target.value, "email")}
          defaultValue={user.email}
          error={error.email}
        />
      </FormControl>
      <FormControl fullWidth className={classes.formGroup}>
        <Button variant="contained" color="primary" type="submit" onClick={handleButtonClick}>
          Continue
        </Button>
      </FormControl>
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserDetails: user => dispatch(setUserDetails(user))
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DetailForm));
