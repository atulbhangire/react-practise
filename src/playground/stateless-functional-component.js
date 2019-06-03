class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    };

    handleAddOption(option) {
        if(!option) {
            return "Please enter valid option";
        } else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists!";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options: options }))
            }   
        } catch (error) {
            
        }        
    }

    componentDidUpdate(prevState, prevProps) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleRemoveAll() {
        this.setState(() => ({ 
            options: [] 
        }));
    };

    handleDeleteOption(optionText) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionText !== option
            })
        }));
    }
    
    render() {
        const subtitle = "This is subtitle heading";

        return (            
            <div>
                <Header subtitle={subtitle} />
                <Action />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
};

//Default Props
IndecisionApp.defaultProps = {
    options: ["thing one", "thing two", "thing three"]
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );    
}

//Default Props
Header.defaultProps = {
    title: "Indecision App"
}

const Action = (props) => {
    return (
        <div>
            <button>What Shoul I Do ?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            <ol>
                {
                    props.options.map((option) =>  <Option key={option} option={option} handleDeleteOption={props.handleDeleteOption}/> )
                }
            </ol> 
        </div>
    );
}

const Option = (props) => {
    return (            
        <li>{props.option} <button onClick={(e) => props.handleDeleteOption(props.option)}>X</button></li>                
    );
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
        this.setState(() => ({ 
            error: error 
        }));
                
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