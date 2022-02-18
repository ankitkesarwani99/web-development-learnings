import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import {useState} from 'react';

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
                    
                    {
                        filterExpenseList.map(expense =>
                            (<ExpenseItem 
                                title={expense.title}
                                amount={expense.amount} 
                                date={expense.date}>
                            </ExpenseItem>
                            ))
                    }
            </Card>
    ); 
}

export default Expenses;