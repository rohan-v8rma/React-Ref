import React from 'react';

import LoginButton from "../Components/ConditionalLoginComp";
import LogoutButton from "../Components/ConditionalLogoutComp";

class ConditionalRendering extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const logoutButton = <LogoutButton onClick={this.handleLogoutClick} />;
        const loginButton = <LoginButton onClick={this.handleLoginClick} />;

        return(
            <div>
                {/* If the use is already logged in, we need to show logout button, else we need to show login button. */}
                {isLoggedIn? logoutButton : loginButton}
            </div>
        )
    }
}

export default ConditionalRendering;