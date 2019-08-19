const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

export default reducer;
