import React from "react";
import Link from "@frontity/components/link";
import { connect, styled, keyframes, css} from "frontity";

const Nav = ({ state, actions }) => (
    <>
      {state.theme.menu.map(([name, link], index) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;

        // add a delay
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
        return (
          <div key={index}>
            {
              // If link url is the current page, add `aria-current`.
              // also, use an onClick function to close the menu.   
            }
            <NavItem 
              css={css`
                  animation: ${fadeIn};
                  animation-duration: 1s;
                  animation-timing-function: linear;
                  animation-delay: ${Stagger * index }ms;
                  animation-repeat: no-repeat;
                  animation-fill-mode: both;
                `
              }
              key={name} onClick={() => actions.theme.closeMenu()} link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </NavItem>
          </div>
        );
      })}
    </>
  );


    
const NavItem = styled(Link)`
`

export default connect(Nav);