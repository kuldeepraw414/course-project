import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function ExpenseList(props) {
    return (
        <div className="expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
        </div>
    )
}
export default ExpenseList