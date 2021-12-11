export const usersReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "LIST": {
      return { ...state, list: action.payload };
    }
    case "POST_DETAILS": {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
};
