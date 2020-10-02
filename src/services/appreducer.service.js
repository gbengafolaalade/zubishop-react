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
    case "GET_CATEGORIES":
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      break;
  }
};
