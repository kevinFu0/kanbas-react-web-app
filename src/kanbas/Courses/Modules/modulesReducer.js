import { createSlice } from '@reduxjs/toolkit';
import db from '../../Database';

// create reducer's initial state
const initialState = {
  modules: db.modules,
  module: { name: 'New Module 123', description: 'New Description' },
};

const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  // declare reducer functions
  // new module is in action.payload
  // update modules in state adding new module
  // at beginning of array. Override _id with
  // timestamp

  reducers: {
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    // module ID to delete is in action.payload
    // filter out module to delete

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    // module to update is in action.payload
    // replace module whose ID matches
    // action.payload._id

    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
