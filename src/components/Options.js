import React from "react";
import Option from "./Option.js";

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

export default Options;