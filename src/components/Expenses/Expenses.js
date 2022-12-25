import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChandeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses =props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChandeHandler}
        />
       <ExpensesList items={filteredExpenses} /> 
      </Card>
    </div>
  );
};
export default Expenses;
