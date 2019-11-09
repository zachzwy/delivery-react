const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    case "IS_LOGGED_IN":
      return {
        ...state,
        isAuth: action.payload
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuth: false,
        currentUser: null
      };
    default:
      return state;
  }
};

export default reducer;
