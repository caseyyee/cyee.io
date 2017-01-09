import React from 'react'
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Grid columns={2}>
              <Span columns={1}>
                <Link
                  to={prefixLink('/')}
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  Casey Yee
                </Link>
              </Span>
              <Span columns={1} style={{
                  textAlign: 'right'
                }} last>
                <a href='https://twitter.com/whoyee'>Twitter</a>
                <a href='https://github.com/caseyyee'>Github</a>
              </Span>
            </Grid>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
