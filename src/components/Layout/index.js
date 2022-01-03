import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const Layout = () => {
  return (
    <Wrapper>
      <div className="container mt-3">
        <Link to="/">
          <h2 className="logo">
            <a>Coeffinition</a>
          </h2>
        </Link>
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    text-align: center;
    font-family: var(--logo-font);
  }
  a {
    color: var(--color);
    text-decoration: none;
  }
`;

export default Layout;
