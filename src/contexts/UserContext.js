import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        company: {
            name: null
        }
    }

    setCompany = (c) => {
         this.setState({company: c});
    }

    render() {
        return (
            <UserSessionContext.Provider value={{...this.state, setCompany: this.setCompany}}>
                {this.props.children}
            </UserSessionContext.Provider>
        );
    }
}

export default UserSessionContextProvider;
