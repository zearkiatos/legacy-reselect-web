import { createSelector } from "reselect";
import { filter, contains } from "lodash";

const postsSelector = (state) => state.posts;

const selectedPostsSelector = (state) => state.selectedPostIds;
const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = filter(posts, (post) =>
    contains(selectedPostIds, post.id)
  );

  return selectedPosts;
};

export default createSelector(postsSelector, selectedPostsSelector, getPosts);
