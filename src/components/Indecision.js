import React from "react";
import Options from "./Options.js";
import Header from "./Header.js";
import Action from "./Action.js";
import AddOption from "./AddOption.js";
import ExpensesDashboard from "./ExpensesDashboard";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AddExpenses from "./AddExpenses";
import EditExpenses from "./EditExpenses";
import NotFoundPage from "./NotFoundPage";

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
                <BrowserRouter>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create</Link>
                    <Switch>            
                        <Route exact path="/" component={ExpensesDashboard} />
                        <Route path="/create" component={AddExpenses} />
                        <Route path="/edit/:id" component={EditExpenses} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        );
    }
}

export default Indecision;