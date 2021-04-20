import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AdminContext, UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {
    const [user,setUser]=useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};
export default PrivateRoute;