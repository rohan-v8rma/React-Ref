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
        let button;

        
        /* If user is already logged in, we need to show the logout button */
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        /* If user is logged out, we need to show the login button */
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return(
            <div>
                {button}
            </div>
        )
    }
}

export default ConditionalRendering;