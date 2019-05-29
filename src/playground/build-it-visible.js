class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            isVisible: false,
            text: "This is paragraph",
            title: "Visibility Toggle"
        }
    };

    handleToggle() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggle}>{(this.state.isVisible) ? 'Hide Details' : 'Show Details' }</button>
                {this.state.isVisible && <p>{this.state.text}</p>}
            </div>
        )    
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));




// const data = {
//     heading: "Visibility Toggle",
//     para: "Test text"
// };

// let isVisible = false;
// const toggleData = () => {
//     isVisible = !isVisible;
//     renderFunction();    
// }

// const appRoot = document.getElementById("app");

// const renderFunction = function(){
//     const template = (
//         <div>
//             <button onClick={toggleData}>{(isVisible) ? "Hide Details" : "Show Details"}</button>
//             {(isVisible) && <p>{data.para}</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// renderFunction();

