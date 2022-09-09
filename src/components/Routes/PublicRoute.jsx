import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute({
    children,
    restricted,
    redirectPath = '/',
    isLoggedIn,
}) {
    if (isLoggedIn && restricted) {
        return <Navigate to={redirectPath} replace />;
    }
        return children ? children : <Outlet />;
}