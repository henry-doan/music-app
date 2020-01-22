import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Success from './Success';

const App = () => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/auth/spotify/callback' component={Success} />
    </Switch>
  </>
)

export default App;
