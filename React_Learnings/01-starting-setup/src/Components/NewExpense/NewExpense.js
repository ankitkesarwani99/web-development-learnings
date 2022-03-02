import './NewExpense.css';
import ExpenseForm from './ExpenseForm'



function NewExpense(props) {

    const saveExpenseHanlder=(expenseData)=>{
        const derivedExpenseData={
            ...expenseData,
            id: Math.ceil(Math.random()*100).toString()
        }
        props.onNewExpenseDataSave(derivedExpenseData);
        console.log(derivedExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveExpense={saveExpenseHanlder}/>
        </div>
    );
}
export default NewExpense;