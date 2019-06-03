class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCounter = this.handleAddCounter.bind(this);
        this.handleMinusCounter = this.handleMinusCounter.bind(this);
        this.handleResetCounter = this.handleResetCounter.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const storageData = localStorage.getItem('count');
        const count = parseInt(storageData, 10);
        console.log(storageData);
        if(!isNaN(count)) {
            
            this.setState(() => ({ count: count }))
        }        
    }

    ComponentDidUpdate(prevState, prevProps) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    
    handleAddCounter() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });        
    };

    handleMinusCounter() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };

    handleResetCounter() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddCounter}>+1</button>
                <button onClick={this.handleMinusCounter}>-1</button>
                <button onClick={this.handleResetCounter}>Reset</button>
            </div>
        );
    }
}

//Default Props

// Counter.defaultProps = {
//     count : 0
// }

ReactDOM.render(<Counter />, document.getElementById("app"));