import { authCreator } from "./auth-reduser";

const INITIALIZED_SUCCSESS = "INITIALIZED_SUCCSESS";

let initialState = {
  initialaized: false
};

export let initialaizedSuccess = () => ({ type: INITIALIZED_SUCCSESS });


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCSESS:
      return { ...state, initialaized: true }
    default:
      return state;
  }
}

export const initialaizeApp = () => (dispatch) => {
  let promice = dispatch(authCreator());
  Promise.all([promice]).then(() => {
    dispatch(initialaizedSuccess())
  });
}

export default appReducer
