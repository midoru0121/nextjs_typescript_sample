import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 50px;
  padding: 0 24px;
  background-color: #5a170e;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #e65100;
`;

const Nav = styled.nav`
  flex-grow: 1;
  padding: 0 40px;
`;

const Ul = styled.ul`
  align-items: center;
  display: flex;
`;

const Li = styled.li`
  margin: 0 8px;
`;

const LinkText = styled.span`
  color: #ffd202;
  cursor: pointer;
  font-size: 12px;
  padding: 4px 8px;
  user-select: none;
`;

export const GlobalNav = () => (
  <Header>
    <Title>Curry World</Title>
    <Nav>
      <Ul>
        <Li>
          <Link href="/">
            <LinkText>印度</LinkText>
          </Link>
        </Li>
        <Li>
          <Link href="/thai">
            <LinkText>泰國</LinkText>
          </Link>
        </Li>
      </Ul>
    </Nav>
  </Header>
);
