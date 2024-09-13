import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
import { categories } from "@/lib/categoriesData";

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  onAddItem,
  onEditItem,
  onDeleteItem,
}) {
  const [mode, setMode] = useState("");

  // ADD: State to hold the item being edited. - Should be an object - thus {}
  const [editedItem, setEditedItem] = useState({});
  // pass on to form!

  // then - implement a variable function in the form component with
  // two variant Form components: onSubmit(part of the syntax)=onEdit/onAdd
  // see below.

  function handleChangeMode(mode) {
    setMode(mode);
  }
  // pass on to shopping item - and to form?

  return (
    <>
      <StyledHeader>
        <h1>Shopping Car-d</h1>
        {/* <img src="my-logo.png" alt="My Logo" /> */}
        {/* <SearchBar /> */}
      </StyledHeader>
      <body>
        <main>
          {shoppingItemsWithCategoryColor.length === 0 && (
            <StyledNoItemsMessage>
              There are no items on your shopping list. Add items using the form
              below.
            </StyledNoItemsMessage>
          )}
          {mode === "edit" && (
            <Form
              onSubmitItem={onEditItem}
              categories={categories}
              item={editedItem}
              submitLabel={"update"}
              onChangeMode={handleChangeMode}
              mode={mode}
            />
          )}
          {mode === "add" && (
            <Form
              onSubmitItem={onAddItem}
              categories={categories}
              submitLabel={"submit"}
              onChangeMode={handleChangeMode}
              mode={mode}
            />
          )}

          {/* Change this button so that it disappears when the form is shown */}
          {mode !== "add" && (
            <AddItemContainer>
              <>
                <p>...need anything else?</p>
                <AddButton onClick={() => handleChangeMode("add")}>
                  {/* {mode === "add" ? "cancel" : "+"} */}+
                </AddButton>
              </>
            </AddItemContainer>
          )}

          {/* Button on shopping item done, too.
           */}
          {/* NEXT - THURSDAY MORNING: */}
          {/* Now create the variants for the form; 
 herefore we need to set the item to be edited in order to prefill the form */}
          <StyledH1>
            There's {shoppingItemsWithCategoryColor.length} things left to get:
          </StyledH1>
          <StyledList>
            {shoppingItemsWithCategoryColor.map((shoppingItem) => {
              return (
                <ShoppingItem
                  key={shoppingItem.id}
                  shoppingItem={shoppingItem}
                  onDeleteItem={onDeleteItem}
                  onEditItem={() => setEditedItem(shoppingItem)}
                  onChangeMode={() => handleChangeMode("edit")}
                />
              );
            })}
          </StyledList>
        </main>
      </body>
    </>
  );
}

const AddItemContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
  gap: 10px;
`;

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: -4rem;
`;

const StyledH1 = styled.h1`
  /* padding: 20px; */
  text-align: center;
`;

// How can I move it to the center?
const AddButton = styled.button`
  display: flex;
  /* flex-direction: column;
  text-align: center; */
  margin-left: 0.6rem;
  margin-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 16px;
  font-size: 1.5rem;
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
