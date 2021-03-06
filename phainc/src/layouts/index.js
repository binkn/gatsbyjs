import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// components
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Email from '../components/footer/email/Email'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="GatsbyJS Phainc page"
      meta={[
        { name: 'description', content: 'GatsbyJs practice' },
        { name: 'keywords', content: 'training, gatsby, phainc, web-page' }
      ]}
    />

    <Header />

    <div>
      {children()}
    </div>

    <Email />

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
