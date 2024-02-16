import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./components/SearchBar/searchBar.reducer";

export default configureStore({
  reducer: {
    search: searchBarReducer
  },
});
