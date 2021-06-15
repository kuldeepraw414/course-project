import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 249,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 345,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e3',
    title: 'Bike',
    amount: 1249,
    date: new Date(2020, 2, 28)
  },
  {
    id: 'e4',
    title: 'Home Insurance',
    amount: 2249,
    date: new Date(2020, 2, 28)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
