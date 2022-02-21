import Expenses from "./Components/Expense/Expenses";
import './App.css';
import NewExpense from "./Components/NewExpense/NewExpense";
import {useState} from 'react';
import ExpenseChart from "./Components/Expense/ExpenseChart";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Samosa',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2',
    title: 'Barfi',
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Rasgulla',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Chena',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses,setExpenses]=useState(initialExpenses);
  const onNewExpenseDataSaveHandler=(newExpenseData)=>{
    console.log(initialExpenses)
    setExpenses([newExpenseData,...expenses]);
  }
  return (
    <div>
      <h2 style={{textAlign:'center'}}>Expense-Keeper</h2>
      <NewExpense onNewExpenseDataSave={onNewExpenseDataSaveHandler}/>
      
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
