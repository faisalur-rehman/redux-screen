import store from "./store"
import { sectionsAdded } from "./reducer"

let arr = [{ name: "project 1" }, { name: "project 2" }]

store.dispatch(sectionsAdded({ sections: arr }))

console.log("store", store.getState())
