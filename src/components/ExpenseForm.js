import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/initialize';
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {    
    constructor() {
        super();
        this.state = {
            description: '',
            note: '',
            amount: '',
            createdAt: moment(),
            calenderFocus: false
        };
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmit = this.onSubmit(this);
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
                note: e.target.value
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

    onSubmit() {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" autoFocus value={this.state.description} placeholder="Description" onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" onChange={this.onAmountChange} />
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