import React from 'react'
import { Helmet } from 'react-helmet'
const SEOSettings = ({title,content}) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="description" content={content} />
  </Helmet>
  )
}

export default SEOSettings