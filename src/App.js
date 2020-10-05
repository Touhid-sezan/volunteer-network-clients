import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import VolunteerForm from './Components/VolunteerForm/VolunteerForm';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import LogIn from './Components/LogIn/LogIn';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>

      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path="/login">
              <LogIn />
        </Route>
        <PrivateRoute path='/admin'>
              <Admin />
        </PrivateRoute>

        <PrivateRoute exact path='/volunteer-register/:title'>
          <VolunteerForm></VolunteerForm>
        </PrivateRoute>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;