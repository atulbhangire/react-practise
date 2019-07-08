import React from "react";

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    addOption(e) {
        e.preventDefault();
        const optionVal = e.target.elements.option.value;
        const error = this.props.handleAddOption(optionVal)
        this.setState(() => {
            return {
                error: error
            }
        });
                
        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;