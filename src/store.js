import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./components/SearchBar/searchBar.reducer";
import carouselReducer from "./components/SearchBar/carousel.reducer";
export default configureStore({
  reducer: {
    search: searchBarReducer,
    carouselStore: carouselReducer,
  },
});
