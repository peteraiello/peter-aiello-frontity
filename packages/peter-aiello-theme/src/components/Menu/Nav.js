import React from "react";
import Link from "@frontity/components/link";
import { connect, styled } from "frontity";

const Nav = ({ state, actions }) => (
    <>
      {state.theme.menu.map(([name, link]) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <div key={name}>
            {
              // If link url is the current page, add `aria-current`.
              // also, use an onClick function to close the menu.   
            }
            <Link key={name} onClick={() => actions.theme.closeMenu()} link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </div>
        );
      })}
    </>
  );

export default connect(Nav);