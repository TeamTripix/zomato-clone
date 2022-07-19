const initialState = {
  list: [],
};
export const addtoCart = (state = initialState, action) => {
  switch (action.type) {
    case "add to cart":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };

    case "remove from cart":
      const newList = state.list.filter((data) => data.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "check out":
      return initialState;

    default:
      return state;
  }
};

const addTotalPriceInitialState = 0;
export const addTotalPrice = (state = addTotalPriceInitialState, action) => {
  switch (action.type) {
    case "add total price":
      return parseInt(action.data);
    case "check out":
      return addTotalPriceInitialState;
    default:
      return state;
  }
};
const alertInitialState = { status: false, message: "", behaviour: "" };
export const alert = (state = alertInitialState, action) => {
  switch (action.type) {
    case "alert":
      return {
        status: action.data.status,
        message: action.data.message,
        behaviour: action.data.behaviour,
      };
    default:
      return alertInitialState;
  }
};
