import react from "react";
const initialState = {
  userName: "",
  password: "",
  isRemember: ""
};
const Loginreducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "ONCHANGE":
      const estate = Object.assign(
        {},
        state,
        action.target.type === "checkbox"
          ? {
              [action.target.name]: action.target.checked
            }
          : {
              [action.target.name]: action.target.value
            }
      );
      //console.log(estate);
      return estate;

    default:
      return state;
  }
};

export default Loginreducer;
