import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';

const App = props =>{


  return(
      <Layout>
        <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/services'} exact component={Services}/>
        </Switch>
      </Layout>
  )
};

export default withRouter(App);

