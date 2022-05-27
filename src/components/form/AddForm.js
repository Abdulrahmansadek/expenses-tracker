import React from "react";
import { Button } from "../globalStyle/Button";

function AddForm({ setOpenForm }) {
  const handleClick = () => {
    setOpenForm(true);
  };
  return (
    <div>
      <Button onClick={handleClick}>Add expense </Button>
    </div>
  );
}

export default AddForm;
