import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import 'bpg-nino-mkhedruli';
import 'mg-glaho-drunk';
import 'arial-geo-bold';
import 'bpg-ucnobi';
import 'bpg-algeti-compact';
import 'bpg-le-studio-04-caps';
import 'alk-rounded-mtav-med';

function App() {

  return (

    <div className="App">
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>

    </div>

  );
}

export default App;
