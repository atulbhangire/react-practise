import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is {props.adminInfo}</p>
    </div>
);

const AuthenticateUser = (props) => {
    return (
        <div>
            <h1>User's Details</h1>
            { props.isAuthenticated && <p>This user is authenticated</p> }
        </div>
    );
}

//HOC Component
const hocWrapperComponent = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This page is for only admin user!</p>
            <WrappedComponent {...props} />
        </div>
    )
};

const hocAuthenticateUser = (WrappedUserComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated && <p>This page is accessible for authenticated user</p> }
            <WrappedUserComponent {...props} />
        </div>
    );
}

const HocAuthenticateUser =  hocAuthenticateUser(AuthenticateUser);

const AdminInfo = hocWrapperComponent(Info);

// ReactDOM.render(<AdminInfo adminInfo="admin's info page."/>, document.getElementById("app"));
ReactDOM.render(<HocAuthenticateUser isAuthenticated= {true}/>, document.getElementById("app"));