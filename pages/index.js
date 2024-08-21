import { shoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";

import styled from "styled-components";

export default function ShoppingItemsList() {
  const categoryColorShoppingItems = shoppingItems.map((shoppingItem) => {
    const category = categories.find(
      (category) => category.name === shoppingItem.category
    );
    const backgroundColor = category ? category.color : "white";
    return {
      ...shoppingItem,
      backgroundColor,
    };
  });

  return (
    <main>
      <StyledH1> {shoppingItems.length} Shopping Items </StyledH1>
      <StyledList>
        {categoryColorShoppingItems.map((shoppingItem) => (
          <ListItem
            key={shoppingItem.id}
            $backgroundColor={shoppingItem.backgroundColor}
          >
            {shoppingItem.quantity} {shoppingItem.name}
            <CategoryBox>{shoppingItem.category}</CategoryBox>
          </ListItem>
        ))}
      </StyledList>
    </main>
  );
}

const StyledH1 = styled.h1`
  padding: 20px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryBox = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px 5px;
  background-color: #eee;
  color: #333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: normal;
`;

const ListItem = styled.li`
  position: relative;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;
`;
