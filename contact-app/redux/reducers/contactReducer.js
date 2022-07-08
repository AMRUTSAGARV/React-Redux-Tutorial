const initialState = [
  {
    id: 0,
    name: "Amrut Sagar",
    number: 88482361,
  },
  {
    id: 1,
    name: "test name",
    number: 123456789,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactReducer;
