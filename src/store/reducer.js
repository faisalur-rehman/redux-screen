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
    },
  ],

  // [
  //   {
  //     name: "RA",
  //     rating: 4.4,
  //     groups: "Restaurants, Caltaro",
  //     distance: 24,
  //     category: "Rest, Vegan",
  //     img: img,
  //     detail: [
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Afghanistan",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austria",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Albania",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austrailia",
  //         checked: false,
  //       },
  //     ],
  //   },
  //   {
  //     name: "AB",
  //     rating: 4.4,
  //     groups: "Restaurants, Caltaro",
  //     distance: 4,
  //     category: " Vegan",
  //     img: img,
  //     detail: [
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Afghanistan",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austria",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Albania",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austrailia",
  //         checked: false,
  //       },
  //     ],
  //   },
  //   {
  //     name: "W",
  //     rating: 4,
  //     groups: "Restaurants",
  //     distance: 243,
  //     category: "Rest",
  //     img: img,
  //     detail: [
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Afghanistan",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austria",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Albania",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austrailia",
  //         checked: false,
  //       },
  //     ],
  //   },
  //   {
  //     name: "B",
  //     rating: 4.4,
  //     groups: "Restaurants, Caltaro",
  //     distance: 43,
  //     category: "Rest, Vegan",
  //     img: img,
  //     detail: [
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Afghanistan",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austria",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Albania",
  //         checked: false,
  //       },
  //       {
  //         icon: <i className="fab fa-creative-commons"></i>,
  //         country: "Austrailia",
  //         checked: false,
  //       },
  //     ],
  //   },
  // ],

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
