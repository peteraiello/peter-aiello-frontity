import React from "react";
import Link from "@frontity/components/link";
import { connect, styled, keyframes, css} from "frontity";

const Stagger = 100;
const fadeIn = keyframes`
  from {
    opacity: 0;
    display: none;
  }
  to {
    opacity: 1;
    display: block;
  }
`

const Nav = ({ state, actions }) => (
    <>
      {state.theme.menu.map(([name, link], index) => {

        return (
            <NavItem 
              css={css`
                  animation: ${fadeIn};
                  animation-duration: 1s;
                  animation-timing-function: linear;
                  animation-delay: ${Stagger * index}ms;
                  animation-repeat: no-repeat;
                  animation-fill-mode: both;
                `
              }
              key={name} onClick={() => actions.theme.closeMenu()} link={link}>
              {name}
            </NavItem>
        );
      })}
    </>
  );
    
const NavItem = styled(Link)`
`

export default connect(Nav);