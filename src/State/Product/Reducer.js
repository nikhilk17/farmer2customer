// import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

// const initialState={
//     products:[],
//     product:null,
//     loading:false,
//     error:null
// }
// export const customerProductReducer=(state=initialState,action)=>{
//         switch(action.type)
//         {
//             case FIND_PRODUCT_BY_ID_REQUEST:
//                 return {...state,loading:true,error:null}
//             case FIND_PRODUCT_BY_ID_SUCCESS:
//                 return {...state,loadind:false,error:null,product:action.payload}
//             case FIND_PRODUCT_BY_ID_FAILURE:
//                 return {...state,loadind:false,error:action.payload}
//             default:
//                 return state;
//         }
// }
import { 
    FIND_PRODUCT_BY_ID_FAILURE, 
    FIND_PRODUCT_BY_ID_REQUEST, 
    FIND_PRODUCT_BY_ID_SUCCESS, 
    FIND_PRODUCTS_REQUEST, 
    FIND_PRODUCTS_SUCCESS, 
    FIND_PRODUCTS_FAILURE, 
    FIND_PRODUCTS_BY_CATEGORY_REQUEST,
    FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
    FIND_PRODUCTS_BY_CATEGORY_FAILURE,
    DELETE_PRODUCT_SUCCESS
  } from "./ActionType";
  
  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
  };
  
  export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_PRODUCT_BY_ID_REQUEST:
        return { ...state, loading: true, error: null };
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return { ...state, loading: false, error: null, product: action.payload };
      case FIND_PRODUCT_BY_ID_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case FIND_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FIND_PRODUCTS_SUCCESS:
        return { ...state, loading: false, error: null, products: action.payload };
      case DELETE_PRODUCT_SUCCESS:
        return { ...state, loading: false, error: null, products: state.products.filter((product) => product.id !== action.payload) };
      case FIND_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case FIND_PRODUCTS_BY_CATEGORY_REQUEST:
        return { ...state, loading: true, error: null };
      case FIND_PRODUCTS_BY_CATEGORY_SUCCESS:
        return { ...state, loading: false, error: null, products: action.payload };
      case FIND_PRODUCTS_BY_CATEGORY_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };