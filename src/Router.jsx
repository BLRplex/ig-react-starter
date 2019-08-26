import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from '@/components/pages/Landing'

import { LANDING_PAGE_PATH } from '@/constants'

export default () => (
  <Router>
    <Switch>
      <Route path={LANDING_PAGE_PATH} component={LandingPage} />
    </Switch>
  </Router>
)
