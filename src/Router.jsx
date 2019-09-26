import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'
import {
  successStrategyExample,
  failureStrategyExample,
} from '@/routerPermissions'

import { LANDING_PAGE_PATH } from '@/constants'

const LandingPage = React.lazy(() => import('@/components/pages/Landing'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Route exact path={LANDING_PAGE_PATH} component={LandingPage} />
      <SecuredRoute
        path="/success"
        component={LandingPage}
        strategy={successStrategyExample} />
      <SecuredRoute
        path="/failure"
        component={LandingPage}
        strategy={failureStrategyExample} />
    </React.Suspense>
  </Router>
)
