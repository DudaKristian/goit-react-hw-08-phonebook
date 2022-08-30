import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout'

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Registration = lazy(() => import("../pages/Registration/Registration"));

const App = () => {

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />}/>
        </Route>
      </Routes>
    </Suspense>
    )
}

export default App



/* <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        <Filter />
        <ContactList /> */

        // 
// const ContactList = lazy(() => import("./ContactList/ContactList"));
// const Filter = lazy(() => import("./Filter/Filter"));
// const Phonebook = lazy(() => import("./Phonebook/Phonebook"));