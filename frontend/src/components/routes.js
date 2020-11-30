import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Cards from './Cards'
import Main from './Main'
import ScrollToTop from './ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/cards' component={ Cards } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )