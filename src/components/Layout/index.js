import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const Layout = () => {
  return (
    <Wrapper>
      <div className="container mt-3">
        <LogoLinkStyle to="/">
          <h2 className="logo">Coeffinition</h2>
        </LogoLinkStyle>
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logo {
    text-align: center;
    font-family: var(--logo-font);
    color: var(--primary-color);
    font-size: 35px;
  }
`;
const LogoLinkStyle = styled(Link)`
  color: var(--color);
  text-decoration: none;
`;
export default Layout;
