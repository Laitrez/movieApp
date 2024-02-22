import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./searchBar.reducer";

const SearchBox = () => {
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   console.log(event.target.value)
  // };

  return (
    <>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Recherche un film"
        value={value}
        onChange={(event) => dispatch(set(event.target.value))}
      />
    </>
  );
};

export default SearchBox;
