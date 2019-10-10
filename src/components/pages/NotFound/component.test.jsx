import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import ThemeProviderWrapper from '@/components/wrappers/ThemeProvider'
import screenshotsTests from '@/e2e'

import NotFound from './component'

it('NotFound page has no visual regressions', async () => {
  render(
    <Router>
      <ThemeProviderWrapper>
        <NotFound />
      </ThemeProviderWrapper>
    </Router>
  )

  await screenshotsTests(expect)
})
