import React from "react";
import { Dispatch } from "redux";
import { State } from "@src/reducers/state";
import {connect} from "react-redux";
import { fetchPosts } from "@src/pages/posts/actions";
import { PostsListState } from "@src/pages/posts/reducers/state";
import DataTable from "@src/common/components/DataTable/DataTable";

const columns = [
  {
    name: "title",
    label: "Title",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "body",
    label: "Body",
    options: {
      filter: true,
      sort: false,
    }
  },
];

interface Props {
  classes?: any,
  posts?: PostsListState[],
  fetchAllPosts?: () => ({})
}

const Posts = React.memo<Props>(props => {
  const { posts, fetchAllPosts } = props;

  React.useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
    }
  }, [posts]);

  return(
    <div>
      <DataTable
        title="Posts List"
        rows={posts}
        columns={columns}
      />
    </div>
  );
});

const mapStateToProps = (state: State) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts())
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Posts);
