import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocus: false,
            error: ''
        };
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onDescriptionChange (e) {
        const description = e.target.value;
        this.setState(() => {
            return {
                description: description
            }
        });
    }

    onNoteChange (e) {
        e.persist();
        this.setState(() => {
            return {
                note: e.target.value
            }
        });
    }

    onAmountChange (e) {
        e.persist();
        this.setState(() => {
            return {
                amount: e.target.value
            }
        });
    }

    onDateChange(createdAt) {
        if(createdAt) {
            this.setState(() => {
                return {
                    createdAt
                }
            })
        }
    }

    onFocusChange({focused}) {
        this.setState(() => {
            return {
                calenderFocus: focused
            }
        })
    }

    onSubmit(e) {        
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: "Please enter description and amount"}));
        } else{
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" autoFocus value={this.state.description} placeholder="Description" onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocus}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                    />                    
                    <textarea placeholder="Add Note Here" onChange={this.onNoteChange}>{this.state.note}</textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;