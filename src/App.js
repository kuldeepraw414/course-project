import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 249,
      date: new Date(2021, 2, 28)
    },
    {
      id: 2,
      title: 'Books',
      amount: 345,
      date: new Date(2021, 2, 28)
    },
    {
      id: 3,
      title: 'Bike',
      amount: 1249,
      date: new Date(2021, 2, 28)
    },
    {
      id: 4,
      title: 'Home Insurance',
      amount: 2249,
      date: new Date(2021, 2, 28)
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense)
    console.log('in app js')
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
