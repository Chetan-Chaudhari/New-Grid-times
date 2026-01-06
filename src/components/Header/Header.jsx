import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";
import { COLORS, QUERIES } from "../../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup className="main-actions">
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <ActionGroup>
          <Logo />
        </ActionGroup>
        <Subscribe>
          <Button>Subscribe</Button>
          <Link href="#">Already a subscriber</Link>
        </Subscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
const Link = styled.a`
  text-decoration: underline;
  font-style: italic;
  color: ${COLORS.gray[700]};
`;
const Subscribe = styled.div`
  align-self: flex-end;
  text-align: center;
  @media ${QUERIES.tabletOnly} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 48px;
  }
  @media ${QUERIES.tabletOnly} {
    .main-actions {
      display: none;
    }
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
  }
`;

export default Header;
