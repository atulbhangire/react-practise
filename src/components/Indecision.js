import React from "react";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import AddOption from "./AddOption.js";

class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.state = {
            options: ["thing one", "thing two", "thing three"]
        }
    };

    handleAddOption(option) {
        if(!option) {
            return "Please enter valid option";
        } else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists!";
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    };

    handleRemoveAll() {
        this.setState(() => {
            return {
                options: []
            }
        });
    };
    
    render() {
        const title = 'Indecision';
        const subtitle = "This is subtitle heading";

        return (            
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}/>
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

export default Indecision;