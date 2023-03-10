const initialState = { loading: false, data: [], error: [], image: false };

export const profileIdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_DATA_PROFILE_BYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_PROFILE_BYID_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_DATA_PROFILE_BYID_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        image: action.image,
      };

    default:
      return {
        state,
      };
  }
};
