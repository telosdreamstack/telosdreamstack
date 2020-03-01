/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { Global, css } from '@emotion/core'

import TopNav from './topnav'
import Footer from './footer'

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={theme => {
        return css`
          body {
            -webkit-font-smoothing: antialiased;
            background-color: ${theme.colors.background};
            margin: 0;
            font-family: ${theme.fonts.body};
            letter-spacing: 0.03em;
          }
          p,
          ul,
          li {
            line-height: 1.8em;
          }
        `
      }}
    />

    <Styled.root sx={{ variant: 'layout.root' }}>
      <TopNav />
      <main sx={{ variant: 'layout.main' }}>
        <div sx={{ variant: 'layout.container' }}>{children}</div>
      </main>
      <Footer />
    </Styled.root>
  </React.Fragment>
)

export default Layout
