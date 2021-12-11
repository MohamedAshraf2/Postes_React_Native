import { usersReducer } from "./users";
export default (state = {}, action) => {
  return { posts: usersReducer(state.posts, action) };
};
