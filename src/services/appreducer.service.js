export default (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        loading: false,
        products: [action.payload, ...state.products],
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      break;
  }
};
