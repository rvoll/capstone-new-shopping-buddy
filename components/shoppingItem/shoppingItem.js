import React from "react";
// import Link from "next/link";
import styled from "styled-components";


export default function ShoppingItem({ id, name, quantity, category }) {
  return (
    <>
      <h1>
        {shoppingItem.quantity} {shoppingItem.name}
      </h1>
      <p> {shoppingItem.category}</p>
    </>
  );
}

{
  /* <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link> */
}

//components/List.js
import styled from "styled-components";

export default function List() {
  return (
    <StyledList>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </StyledList>
  );
}

const ListItem = styled.li`
  background-color: crimson;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;