import React, { createContext, useReducer } from "react";
import AppReducer from "../appreducer.service";
import { Connect, GetRequest } from "../api.core";

// initial state
const initialState = {
  products: [],
  categories: [],
  error: null,
  loading: true,
};

// create product context
export const ProductContext = createContext(initialState);

// create product provider
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const addProduct = async (data) => {
    try {
      const response = await Connect("api/v1/products", "POST", data);

      // dispatch
      dispatch({
        type: "ADD_PRODUCT",
        payload: response.data,
      });

      return response.success;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };

  const getProducts = async () => {
    try {
      const response = await GetRequest("api/v1/products");

      console.log(response.data);
      // dispatch
      dispatch({
        type: "GET_PRODUCTS",
        payload: response.data,
      });

      return response.success;
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };

  const addCategory = async (data) => {
    try {
      const response = await Connect("api/v1/products/category", "POST", data);
      const list = response.data.map((item) => item.name);
      // dispatch
      dispatch({
        type: "ADD_CATEGORY",
        payload: list,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };

  const getCategories = async () => {
    try {
      const response = await GetRequest("api/v1/products/categories");
      console.log(response.data.map((item) => item.name));

      const list = response.data.map((item) => item.name);
      // dispatch
      dispatch({
        type: "GET_CATEGORIES",
        payload: list,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        categories: state.categories,
        addProduct,
        getProducts,
        addCategory,
        getCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
