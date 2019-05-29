class IndecisionApp extends React.Component {
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

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handleClick() {
        alert("handleClick");
        this.props.options = [];
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What Shoul I Do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map((option) =>  <Option key={option} option={option}/> )
                    }
                </ol> 
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (            
            <li>{this.props.option}</li>                
        );
    }
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));