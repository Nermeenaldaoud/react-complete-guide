import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

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
        {filteredExpenses.length === 0 ? (<p>No expenses found.</p>)
        :(filteredExpenses.map((Expense) =>(
          <ExpenseItem
          key={Expense.id}
            title={Expense.title}
            amount={Expense.amount}
            date={Expense.date}
          />
        )))} 
      </Card>
    </div>
  );
};
export default Expenses;
