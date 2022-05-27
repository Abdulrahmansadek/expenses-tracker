import React, { useState } from "react";
import { Title } from "./style";
import AddForm from "../form/AddForm";
import ExpenseForm from "../expenseForm/ExpenseForm";

export default function Header() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Title>
      {openForm ? (
        <ExpenseForm setCloseForm={setOpenForm} />
      ) : (
        <AddForm setOpenForm={setOpenForm} />
      )}
    </Title>
  );
}
