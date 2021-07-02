import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
  name: "sections",
  initialState: [
    {
      // icon: <i className="fab fa-creative-commons"></i>,
      country: "Afghanistan",
      checked: false,
    },
    {
      // icon: <i className="fab fa-creative-commons"></i>,
      country: "Albania",
      checked: false,
    },
    {
      // icon: <i className="fab fa-creative-commons"></i>,
      country: "Austrailia",
      checked: false,
    },
  ],
  reducers: {
    selectOne: (state, action) => {
      let index = action.payload.index;
      console.log("action", state[index]);
      state[index].checked = !state[index].checked;
      return state;
    },
    selectAll: (state, action) => {
      if (action.payload.show) {
        state.forEach((element) => {
          element.checked = true;
        });
      } else {
        state.forEach((element) => {
          element.checked = false;
        });
      }
    },
  },
});

export const { selectOne, selectAll } = slice1.actions;

export default slice1.reducer;
