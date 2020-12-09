import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../Link";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (  
    <PaginationWrapper>
      {/* If there's a next page, render this link */}
      {next && (
          <ButtonWrapper>
            <Button link={next}>
               older
            </Button>
        </ButtonWrapper>
      )}
      {/* If there's a previous page, render this link */}
      {previous && (
        <ButtonWrapper>
            <Button link={previous}>
                newer
            </Button>
        </ButtonWrapper>
      )}
    </PaginationWrapper>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);

const PaginationWrapper = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Button = styled(Link)`
    display: block;
    width: auto;
    text-align: center;
    color: var(--orange-highlight);
    border: 1px solid var(--orange-highlight);
    padding: 1rem 3rem;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-family: 'Open Sans',sans-serif;
    font-weight: Bold;
    border-radius: 0;
    background-color: transparent;
`

const ButtonWrapper = styled.div`
    display: inline-block;
    margin-bottom: 8px;
    :last-of-type {
        margin-bottom: 0px;
    }
`