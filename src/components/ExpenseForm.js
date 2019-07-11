import React from "react";

class ExpenseForm extends React.Component {    
    constructor() {
        super();
        this.state = {
            description: '',
            note: ''
        };
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
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

    render() {
        return (
            <div>
                <form>
                    <input type="text" autoFocus value={this.state.description} placeholder="Description" onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" />
                    <textarea placeholder="Add Note Here" onChange={this.onNoteChange}>{this.state.note}</textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;