import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
import { categories } from "@/lib/categoriesData";

// for editing, in index.js the onEditForm is only passed on to the ShoppingItem component

// pass down onEditItem
export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) {
  // State for determining the current mode ("add" or "edit").
  const [mode, setMode] = useState("");

  // ADD: State to hold the item being edited.

  // Function to change the mode (e.g., 'edit' or 'add' or reset).

  function handleChangeMode(mode) {
    setMode(mode);
  }

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
      {/* REPLACED: */}
      {/* <Form
        onAddItem={onAddItem}
        categories={categories}
      /> */}
      {/*  */}
      {/* use conditional rendering here - around the form: 
      if status = create
      => Version 1: empty, otherwise Version 2: prefilled */}
      {mode === "edit" && (
        <Form onAddItem={onAddItem} categories={categories} />
      )}
      {mode === "add" && <Form onAddItem={onAddItem} categories={categories} />}
      {/* for now, the 2 versions are identical - this should be changed later;
       */}

      {/* but  */}
      {/* in the unmarked case - when the mode is not defined, 
i.e. neither edit nor create have been chosen 
- there should be a button on the homepage/list to open the form in create mode
and a button in the shopping item to open the form in edit mode */}

      {/* for the buttons we need a changemode function which we have to define above. */}
      {/* Already done. */}
      <button onClick={() => handleChangeMode(mode === "add" ? "" : "add")}>
        {mode === "add" ? "cancel" : "+"}
      </button>
      {/* Button on shopping item done, too.
       */}
      {/* NEXT */}
      {/* Now create the variants for the form; 
 herefore we need to set the item to be edited in order to prefill the form */}
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              onDeleteItem={onDeleteItem}
              // pass onEditItem to ShoppingItem component
              onEditItem={onEditItem}
              onChangeMode={handleChangeMode}
              mode={mode}
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
