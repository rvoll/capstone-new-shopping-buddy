import { shoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";
// import { ShoppingItem } from "../components/shoppingItemhoppingItem";

import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ShoppingItemsList() {
  const router = useRouter();
  return (
    <main>
      <StyledH1> {shoppingItems.length} Shopping Items </StyledH1>

      <StyledList>
        {shoppingItems.map((shoppingItem) => {
          // Find the category object that matches the shoppingItem's category
          const category = categories.find(
            (category) => category.name === shoppingItem.category
          );

          // If the category exists, use its color, otherwise use a default color
          const backgroundColor = category ? category.color : "red";

          // Render the ListItem component
          return (
            <ListItem key={shoppingItem.id} backgroundColor={backgroundColor}>
              {shoppingItem.quantity} {shoppingItem.name},{" "}
              <CategoryBox>{shoppingItem.category}</CategoryBox>
              {/* <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link> */}
            </ListItem>
          );
        })}
      </StyledList>
    </main>
  );
}

const StyledH1 = styled.h1`
  padding: 20px;
`;

const ListItem = styled.li`
  background-color: ${(props) =>
    props.backgroundColor}; /* Use the backgroundColor prop */
  padding: 20px;
  margin-bottom: 10px;
  margin-right: 40px;
  border-radius: 5px;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const CategoryBox = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #eee;
  color: #333;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;
