class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = "This is subtitle heading";
        let options = ["thing one", "thing two", "thing three"];
        return (            
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption options={options} />
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
    removeAll() {
        alert("removeAll options");
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const optionName = e.target.elements.option.value;
        if(optionName) {
            //this.options.push(optionName);
            //alert(this.options.length);
            alert("value added");
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));