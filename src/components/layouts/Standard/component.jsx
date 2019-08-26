import React from 'react'
import pt from 'prop-types'

const StandardLayout = ({ children }) => (
  <div>
    <header>Header should be here</header>
    <main>{children}</main>
    <footer>Footer should be here</footer>
  </div>
)

StandardLayout.propTypes = {
  children: pt.oneOfType([
    pt.string.isRequired,
    pt.element.isRequired,
  ]),
}

export default StandardLayout
