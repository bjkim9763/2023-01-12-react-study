import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filter/ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredDataHandler = (enteredData) => {
    setFilteredYear(enteredData);
  };

  const expenseItemContainer = (expenses) => {
    return expenses.map((expense) => (
      <ExpenseItem
        keys={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  };
  const filteredItems = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilteredData={filteredDataHandler}
      />
      {expenseItemContainer(filteredItems)}
    </Card>
  );
};

export default Expenses;
