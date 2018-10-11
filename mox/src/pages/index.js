import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/common/Button'

const IndexPage = () => (
  <div className="content">
    <h1>
      Hi people <i className="fas fa-exclamation-circle" />
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Button
      text='Default'
      type='default'
    />
  </div>
)

export default IndexPage
