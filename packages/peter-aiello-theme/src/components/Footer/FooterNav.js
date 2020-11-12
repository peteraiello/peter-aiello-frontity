import React from "react";
import Link from "../Link";
import { connect, styled } from "frontity";

const FooterNav = ({ state }) => (
  <>
      {state.theme.footerMenu.map(([name, link]) => {
        // Check if the link matched the current page url
        return (
            <Link key={name} link={link}>
              {name}
            </Link>
        );
      })
    } 
    </>
  );

export default connect(FooterNav);