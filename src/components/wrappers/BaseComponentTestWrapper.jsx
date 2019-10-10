import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import { childrenPropType } from '@/prop-types'

const BaseComponentTestWrapper = ({ children }) => (
  <Router>
    <ThemeProviderWrapper>
      {children}
    </ThemeProviderWrapper>
  </Router>
)

BaseComponentTestWrapper.propTypes = {
  children: childrenPropType,
}

export default BaseComponentTestWrapper
