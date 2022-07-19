export const addtoCart = (data) => {
  return {
    type: "add to cart",
    payload: {
      id: data.cardData.id,
      data: data,
    },
  };
};
export const removeFromCart = (data) => {
  return {
    type: "remove from cart",
    id: data.id,
  };
};

export const addTotalPrice = (data) => {
  return {
    type: "add total price",
    data: data,
  };
};

export const checkOut = () => {
  return {
    type: "check out",
  };
};

export const alert = (data) => {
  return {
    type: "alert",
    data: data,
  };
};
