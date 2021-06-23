import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import BaseUser from './BaseUser';
import Repos from './Repos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log('Valor no APP é:', isAuth);

  return (
    <Router>
      <Route path="/" exact render={(props) => (
        <Login {...props} isAuth={setIsAuth} />
      )}
      />
      {/* <Route path="/user" exact component={BaseUser} /> */}
      <ProtectedRoute path="/user" component={BaseUser} isAuth={isAuth} />
      <ProtectedRoute path="/repos" component={Repos} isAuth={isAuth} />
      {/* <Route path="/bio" exact component={Bio} /> */}

    </Router>
  );
}

export default App;
// export default setIsAuth;