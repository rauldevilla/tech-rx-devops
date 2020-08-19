import React, { createContext, Component } from 'react';

export const UserSessionContext = createContext();

class UserSessionContextProvider extends Component {
    state = {
        company: {
            name: 'Default company'
        }
    }

    render() {
        return (
            <UserSessionContext.Provider value={{...this.state}}>
                {this.props.children}
            </UserSessionContext.Provider>
        );
    }
}

export default UserSessionContextProvider;
