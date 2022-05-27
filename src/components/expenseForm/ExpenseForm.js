import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../globalStyle/Button";
import { Form, Input } from "./style";
import { ExpenseContext } from "../../context/DataContext";
function ExpenseForm({ setCloseForm }) {
  const [initialValue, setInitialValue] = useState({
    title: "",
    amount: 0,
    date: "",
  });
  const { addExpense } = useContext(ExpenseContext);
  const handleChange = (e) => {
    setInitialValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({ ...initialValue, id: uuidv4() });
  };

  const handleClose = () => {
    setCloseForm(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form>
        <Input
          type="text"
          value={initialValue.title}
          onChange={handleChange}
          id="title"
        />
        <Input
          id="amount"
          type="number"
          value={initialValue.amount}
          onChange={handleChange}
        />
        <Input
          type="date"
          value={initialValue.date}
          onChange={handleChange}
          id="date"
        />
        <div>
          <Button>Add</Button>
          <Button onClick={handleClose}>Back</Button>
        </div>
      </Form>
    </form>
  );
}

export default ExpenseForm;
