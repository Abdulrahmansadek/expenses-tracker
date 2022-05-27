import React, { createContext, useState } from "react";
import { data } from "../data";
export const ExpenseContext = createContext({});

function DataContext({ children }) {
  const [expenses, setExpenses] = useState(data);

  const addExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };
  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter((exp) => {
        return exp.id !== id;
      })
    );
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default DataContext;
