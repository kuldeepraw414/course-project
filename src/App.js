import Expenses from './components/Expenses';

function App() {
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

  return (
    <div className="App">
      <h1>Get started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
