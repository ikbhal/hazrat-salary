import { Outlet, Link } from "react-router-dom";

import styled from 'styled-components'
import { Container } from "../styles/style";

var UL = styled.ul`
  list-style: none;
  display: inline-block;
  float: left;
  border: 1px gold solid;
  padding: 10px;
`;

const Layout = () => {
  return (
    <>
      <nav>
        <UL>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hazrat">Hazrat</Link>
          </li>
          <li>
            <Link to="/masjid">Masjid</Link>
          </li>
          <li>
            <Link to="/maktab">Maktab</Link>
          </li>
        </UL>
      </nav>


      <Container>
        <Outlet />
      </Container>
      
    </>
  )
};

export default Layout;