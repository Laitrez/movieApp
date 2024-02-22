import React from "react";
import { Button } from "react-bootstrap";
import store from "../store";
import { useDispatch, useStore, useSelector } from "react-redux";
import { setP } from "./SearchBar/searchBar.reducer";

export const BNext = () => {
  let page = useSelector((state) => state.page);
  page++;
  const dispatch = useDispatch();
  return <Button page={page} onClick={() => dispatch(setP(page))} />;
};

//
export const BPrev = () => {
  let page = useSelector((state) => state.search.page);
  page--;
  const dispatch = useDispatch();
  return <Button page={page} onClick={() => dispatch(setP(page))} />;
};
