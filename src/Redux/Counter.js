const INCREMENT = "increment"; // create constant
const DECREMENT = "decrement"; 
const INCREMENTBYVALUE = "incrementbyvalue"; 
const initialState = {

  name: "Doffy",
  count: 0,
};
export const incrementbyvalue = (value) => ({
    type: INCREMENTBYVALUE,
    payload:value 
  });
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
    type: DECREMENT,
  });
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
        case INCREMENTBYVALUE:
            return {
              ...state,
              count: state.count + action.payload,
            };
    default:
      return state;
  }
 

}


export default counterReducer;
