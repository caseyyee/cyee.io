import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hello!
        </h1>

        <p>Let's make stuff and giggle.</p>

        <ul>
          <li>
            <Link to={prefixLink('/full-stack-webvr/')}>What it takes to be a full-stack WebVR developer.</Link>
          </li>
        </ul>
      </div>
    )
  }
}
