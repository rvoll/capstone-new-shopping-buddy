import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
import { categories } from "@/lib/categoriesData";

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  onAddItem,
  onEditItem, // Function to handle editing an existing item.
  onDeleteItem,
}) {
  // State for determining the current mode ("add" or "edit").
  const [mode, setMode] = useState("");
  // State to hold the item being edited.
  const [editingItem, setEditingItem] = useState({});

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
      {/* If the mode is 'edit', show the Form component for editing the item */}
      {mode == "edit" && (
        <Form
          onSubmitItem={onEditItem}
          categories={categories}
          item={editingItem}
          submitLabel={"UPDATE"}
          onChangeMode={handleChangeMode}
          mode={mode}
        />
      )}
      {/* If the mode is 'add', show the Form component for adding a new item */}
      {mode === "add" && (
        <Form
          onSubmitItem={onAddItem}
          categories={categories}
          submitLabel={"ADD"}
          onChangeMode={handleChangeMode}
          mode={mode}
        />
      )}
      {/* Button to toggle between 'add' mode and cancelling the form */}
      {mode !== "edit" && (
        <button onClick={() => handleChangeMode(mode === "add" ? "" : "add")}>
          {mode === "add" ? "cancel" : "+"}
        </button>
      )}
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              onDeleteItem={onDeleteItem}
              onEditItem={() => setEditingItem(shoppingItem)}
              onChangeMode={() => handleChangeMode("edit")}
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
