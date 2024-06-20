// import { API_BASE_URL, api } from "../../config/apiConfig";
import api from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCTS_BY_CATEGORY_FAILURE, FIND_PRODUCTS_BY_CATEGORY_REQUEST, FIND_PRODUCTS_BY_CATEGORY_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProductsById=(reqData)=>async (dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
   const {productId}=reqData;
    try{
        const {data}=await api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
        console.log(data)
    }catch(error){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})

    }
}
export const findAllProducts = () => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    try {
      const { data } = await api.get('/api/products/all');
      dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
  };

  export const findProductsByCategory = (category) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST
     });
    try {
      const response = await api.get(`/api/products/category/${category}`);
      dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_FAILURE, payload: error.message });
    }
  };

  export const createProduct=(product)=>async (dispatch)=>{
    dispatch({type:CREATE_PRODUCT_REQUEST})
    try{
        const {data}=await api.post(`${API_BASE_URL}/api/admin/products/`,product);
        dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
        console.log("create Product ",data)
    }catch(error){
        dispatch({type:CREATE_PRODUCT_FAILURE,payload:error.message})
    }
  }

  export const deleteProduct=(productId)=>async (dispatch)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try{
        const {data}=await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
        console.log("delete Product ",data)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
    }catch(error){
        dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message})
    }
  }