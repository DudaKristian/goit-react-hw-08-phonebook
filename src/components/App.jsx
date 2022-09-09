import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout'
import { useGetCurrentUserQuery } from "features/phoneBookAPI";
import { getUser } from "features/userSlice";
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';


const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Registration = lazy(() => import("../pages/Registration/Registration"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));


const App = () => {
  const { token, isLogedIn } = useSelector(getUser);
  useGetCurrentUserQuery(undefined, { skip: !token });

  return (
    <Suspense fallback={ <p> Loading... </p>}>
      <Routes>
        <Route path="/"
          element={
            <PublicRoute redirectPath="/" isLoggedIn={isLogedIn}>
                <SharedLayout />
            </PublicRoute>} >
          <Route index element={<Home />} />
          
          <Route
              path="/contacts"
              element={
                <PrivateRoute redirectPath="/login" isLoggedIn={isLogedIn}>
                  <Contacts />
                </PrivateRoute>
              }
              />
          
        
          <Route
            element={
              <PublicRoute
                redirectPath="/contacts"
                isLoggedIn={isLogedIn}
                restricted
              />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
    )
}

export default App




