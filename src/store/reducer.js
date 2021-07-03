import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/images/img1.jpg";

const slice1 = createSlice({
  name: "sections",
  initialState: [
    {
      name: "#RAW",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "24 KM",
      category: "Rest, Vegan",
      img: img,
      detail: [
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Afghanistan",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austria",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Albania",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austrailia",
          checked: false,
        },
      ],
    },
    {
      name: "A",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "4 KM",
      category: " Vegan",
      img: img,
      detail: [
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Afghanistan",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austria",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Albania",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austrailia",
          checked: false,
        },
      ],
    },
    {
      name: "W",
      rating: 4,
      groups: "Restaurants",
      distance: "24",
      category: "Rest",
      img: img,
      detail: [
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Afghanistan",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austria",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Albania",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austrailia",
          checked: false,
        },
      ],
    },
    {
      name: "#RAW",
      rating: 4.4,
      groups: "Restaurants, Caltaro",
      distance: "24 KM",
      category: "Rest, Vegan",
      img: img,
      detail: [
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Afghanistan",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austria",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Albania",
          checked: false,
        },
        {
          icon: <i className="fab fa-creative-commons"></i>,
          country: "Austrailia",
          checked: false,
        },
      ],
    },
  ],

  reducers: {
    selectOne: (state, action) => {
      let id = action.payload.id;
      let index = action.payload.index;
      console.log("action", state[index]);
      state[id].detail[index].checked = !state[id].detail[index].checked;
      return state;
    },
    selectAll: (state, action) => {
      if (action.payload.show) {
        state[action.payload.id].detail.forEach((element) => {
          element.checked = true;
        });
      } else {
        state[action.payload.id].detail.forEach((element) => {
          element.checked = false;
        });
      }
    },
  },
});

export const { selectOne, selectAll } = slice1.actions;

export default slice1.reducer;
