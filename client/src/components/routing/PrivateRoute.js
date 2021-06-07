import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;
    return (
        <Route
            {...rest}
            render={(prop) =>
                !isAuthenticated && !loading ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...prop} />
                )
            }
        />
    );
};

export default PrivateRoute;
