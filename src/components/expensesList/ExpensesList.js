import React, { useContext } from "react";
import { ExpenseContext } from "../../context/DataContext";
import ExpenseItem from "./ExpenseItem";
function ExpensesList() {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <ul>
        {expenses.map((item, idx) => (
          <ExpenseItem item={item} key={idx} />
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;
