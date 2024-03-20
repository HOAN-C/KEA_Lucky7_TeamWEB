import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 0;
`;

const Logo = styled.div`
  margin: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #369e41;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 40px;
    font-size: 1rem;
  }

  // Link
  a {
    text-align: right;
    color: gray;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #369e41;
    }

    &.active {
      color: #369e41;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Lucky7</Logo>
      <Nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="introSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Gachon.Univ KEA
            </Link>
          </li>
          {/* 추후 바로가기 기능 추가 예정. ScrollSnap기능과 연동 어려움 */}
          {/* <li>
            <Link
              activeClass="active"
              to="memberSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Member
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
