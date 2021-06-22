import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import BaseUser from './BaseUser';
import Bio from './components/Bio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';


function App() {
  const [isAuth, setIsAuth] = useState(false); //Espécie de variável global?
  console.log('Valor no APP é:', isAuth);

  return (
    <Router>
      <Route path="/" exact render={(props) => (
        <Login {...props} isAuth={setIsAuth} />
      )}
      />
      {/* <Route path="/user" exact component={BaseUser} /> */}
      <ProtectedRoute path="/user" component={BaseUser} isAuth={isAuth} />
      {/* <Route path="/bio" exact component={Bio} /> */}

    </Router>
  );
}

export default App;
// export default setIsAuth;