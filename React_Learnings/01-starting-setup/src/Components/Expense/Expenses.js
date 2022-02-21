import Card from "../Card/Card";
import './Expenses.css'
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filterYear,setFilterYear]=useState('2020');

    const onExpenseFilterChangeHandler=(selectedYear)=>{
        setFilterYear(selectedYear);
    }
    const filterExpenseList=props.items.filter(expense =>{
        return expense.date.getFullYear().toString()===filterYear;
    });

    return (
            <Card className='expenses'> 
                   <ExpenseFilter 
                   initialSelectedYear={filterYear}
                   onExpenseYearSelectionFilter={onExpenseFilterChangeHandler}/>
                   <ExpenseChart expenses={filterExpenseList}></ExpenseChart>
                   <ExpenseList items={filterExpenseList}></ExpenseList>
            </Card>
    ); 
}

export default Expenses;