import styled from "styled-components";
import FormToCreateShoppingItem from "@/components/FormToCreateShoppingItem/FormToCreateShoppingItem.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";

import { categories } from "@/lib/categoriesData";

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  onAddItem,
  onDeleteItem,
}) {
  return (
    <main>
      <StyledH1>
        {shoppingItemsWithCategoryColor.length} Shopping Items
      </StyledH1>
      {shoppingItemsWithCategoryColor.length === 0 && (
        <StyledNoItemsMessage>
          There are no items on your shopping list. Add items using the form
          below.
        </StyledNoItemsMessage>
      )}

      <FormToCreateShoppingItem onAddItem={onAddItem} categories={categories} />
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </StyledList>
    </main>
  );
}

const StyledH1 = styled.h1`
  padding: 20px;
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 12px;
  align-content: start;
  list-style-type: none;
`;

const StyledNoItemsMessage = styled.p`
  display: flex;
  align-items: start;
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
  position: relative;
`;
