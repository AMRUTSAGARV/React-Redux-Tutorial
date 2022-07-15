const initialState = [
  {
    id: 0,
    name: "Amrut Sagar",
    number: 88482361,
    email: "as@g.com",
  },
  {
    id: 1,
    name: "test name",
    number: 123456789,
    email: "test@g.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default contactReducer;
