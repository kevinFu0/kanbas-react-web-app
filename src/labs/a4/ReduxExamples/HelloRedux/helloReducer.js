import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World",
};
const helloSlice = createSlice({
  name: "hello",
  initialState,   // initialState: maintaing the data "Hello World"
  reducers: {},   // reducers are like setCounter, elements like increment, decrement would live here
});
export default helloSlice.reducer;

