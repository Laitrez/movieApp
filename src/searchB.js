import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import setSearchTerm from "./action/action";

// const items = useSelector(selectItems);
// const dispatch = useDispatch();

const SearchBox = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  // const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTermLocal(value);

    // dispatch(setSearchTerm(value));
  };

  return (
    <>
      <Form.Control
        size="lg"
        type="text"
        placeholder="toto"
        value={searchTermLocal}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
