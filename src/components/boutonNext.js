import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import store from "../store";
import { useDispatch, useStore, useSelector } from "react-redux";
import { setP } from "./SearchBar/searchBar.reducer";

export const BNext = () => {
  let page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();
  useEffect(() => console.log(page));
  let payload={
    pageTest:page+1,
    pageMax:10,
  }
  return <Button page={page} onClick={() => dispatch(setP(payload))} />;
};

//
export const BPrev = () => {
  let page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();
  let pagination = {
    pageTest: page-1,
    pageMax: 10,
  };
  return <Button page={page} onClick={() => dispatch(setP(pagination))} />;
};
