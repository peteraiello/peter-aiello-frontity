import React from "react";
import Link from "../Link";
import { connect, styled } from "frontity";

const FooterNav = ({ state }) => (
    <>
      {state.theme.footerMenu.map(([name, link]) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <div key={name} >
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </div>
        );
      })}
    </>
  );

export default connect(FooterNav);