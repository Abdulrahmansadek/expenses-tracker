import React, { useContext } from "react";
import { ExpenseContainer, ExpenseElements, Container, Close } from "./style";
import { ExpenseContext } from "../../context/DataContext";
function ExpenseItem({ item }) {
  const { deleteExpense } = useContext(ExpenseContext);
  const handleDelete = () => {
    deleteExpense(item.id);
  };
  return (
    <Container>
      <ExpenseContainer>
        <Close onClick={handleDelete}>X</Close>
        <ExpenseElements>{item.id}</ExpenseElements>
        <ExpenseElements>{item.title}</ExpenseElements>
        <ExpenseElements>{item.amount}</ExpenseElements>
        <ExpenseElements>{item.date}</ExpenseElements>
      </ExpenseContainer>
    </Container>
  );
}

export default ExpenseItem;
