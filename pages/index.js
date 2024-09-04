import styled from "styled-components";
import FormToCreateShoppingItem from "@/components/FormToCreateShoppingItem/FormToCreateShoppingItem.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";

import { categories } from "@/lib/categoriesData";
import { useState } from "react";

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  onAddItem,
  onDeleteItem,
}) {
  const [isToBeDeleted, setIsToBeDeleted] = useState(false);

  function toggleIsToBeDeleted() {
    setIsToBeDeleted(!isToBeDeleted);
  }

  return (
    <main>
      <StyledH1>
        {shoppingItemsWithCategoryColor.length} Shopping Items{" "}
      </StyledH1>
      {shoppingItemsWithCategoryColor.length === 0 && (
        <StyledEmptyMessage>
          There are no items on your shopping list. Add items using the form
          below.
        </StyledEmptyMessage>
      )}

      <FormToCreateShoppingItem onAddItem={onAddItem} categories={categories} />
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              toggleIsToBeDeleted={toggleIsToBeDeleted}
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
const StyledEmptyMessage = styled.p`
  display: flex;
  /* justify-content: space-between; */
  align-items: start;
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
  position: relative;
`;
