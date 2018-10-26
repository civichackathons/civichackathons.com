import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  background: #0d2b56;
  margin-bottom: 1.45rem;
  h1 {
    margin: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
