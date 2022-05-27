import "./App.css";
import Header from "./components/header/Header";
import ExpensesList from "./components/expensesList/ExpensesList";
import DataContext from "./context/DataContext";
function App() {
  return (
    <div className="App">
      <DataContext>
        <Header />
        <ExpensesList />
      </DataContext>
    </div>
  );
}

export default App;
