import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Admin from './Admin/index';
import './App.css';
import GetStarted from './components/GetStarted/GetStarted'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import 'bpg-nino-mkhedruli';

function App() {
  return (

    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/admin' component={Admin}/> */}
          {/* <Route path='/' exact component={GetStarted}/> */}
          <Redirect to='/' />
        </Switch>
      </Layout>

    </div>

  );
}

export default App;
