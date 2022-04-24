import React from "react";
import { Dispatch } from "redux";
import { State } from "@src/reducers/state";
import { connect } from "react-redux";
import DataTable from "@src/common/components/DataTable/DataTable"
import { fetchUsers } from "@src/pages/users/actions";
import { UsersListState } from "@src/pages/users/reducers/state";

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "username",
    label: "Username",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "phone",
    label: "Phone",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "website",
    label: "Website",
    options: {
      filter: true,
      sort: false,
    }
  }
];

interface Props {
  classes?: any,
  users?: UsersListState[],
  fetchAllUsers?: () => ({})
}

const Users = React.memo<Props>(props => {
  const { users, fetchAllUsers } = props;

  React.useEffect(() => {
    if (!users.length) {
      fetchAllUsers();
    }
  }, [users]);

  return(
    <div>
      <DataTable
        title="Users List"
        rows={users}
        columns={columns}
      />
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchUsers())
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Users);
