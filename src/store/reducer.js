import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/images/img1.jpg";

const slice1 = createSlice({
  name: "sections",
  initialState: [
    {
      section: "A",
      places: [
        {
          name: "AB",
          rating: 4.4,
          groups: "Restaurants, Caltaro",
          distance: 4,
          category: " Vegan",
          img: img,
          detail: [
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Afghanistan",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austria",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Albania",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austrailia",
              checked: false,
            },
          ],
        },
        {
          name: "ABC",
          rating: 4.4,
          groups: " Caltaro",
          distance: 3,
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
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Albania",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austrailia",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      section: "R",
      places: [
        {
          name: "RA",
          rating: 4.4,
          groups: "Restaurants, Caltaro",
          distance: 24,
          category: "Rest, Vegan",
          img: img,
          detail: [
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Afghanistan",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austria",
              checked: false,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Albania",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austrailia",
              checked: true,
            },
          ],
        },
      ],
    },
    {
      section: "B",
      places: [
        {
          name: "B",
          rating: 4.4,
          groups: "Restaurants, Caltaro",
          distance: 43,
          category: "Rest, Vegan",
          img: img,
          detail: [
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Afghanistan",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austria",
              checked: true,
            },
            {
              icon: <i className="fab fa-creative-commons"></i>,
              country: "Austrailia",
              checked: true,
            },
          ],
        },
      ],
    },
  ],

  reducers: {
    selectOne: (state, action) => {
      let { id, checkedIndex, mainIndex } = action.payload;

      // console.log("action", state[index]);
      state[mainIndex].places[id].detail[checkedIndex].checked =
        !state[mainIndex].places[id].detail[checkedIndex].checked;

      // state[id].detail[index].checked = !state[id].detail[index].checked;
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
