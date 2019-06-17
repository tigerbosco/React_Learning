import React from "react";

const initialState = {
  userName: ""
};

const UserReducer = (state = initialState, action) => {
  console.log(state);
  return state;
};

export default UserReducer;
