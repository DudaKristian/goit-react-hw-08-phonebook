import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
    children,
    redirectPath = "/",
    isLoggedIn,
}) {
    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
}