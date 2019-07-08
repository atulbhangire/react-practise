import React from "react";

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

export default Action;