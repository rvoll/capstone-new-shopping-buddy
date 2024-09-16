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

  const [editedItem, setEditedItem] = useState({});
  // keep this and change, s. below
  // const [isPurchased, setIsPurchased] = useState(false);

  // CONTINUE HERE TO IMPLEMENT THE CHANGES SUGGESTED BY CHAT getPageFiles;
  // Define toggleIsPurchased with an Item Argument: You need to modify toggleIsPurchased
  // to accept an item as an argument. This way, it can toggle the state
  // for each specific item instead of a generic toggle.
  const [isPurchased, setIsPurchased] = useState(false);

  function handleChangeMode(mode) {
    setMode(mode);
  }

  function toggleIsPurchased(id) {
    // if (shoppingItem.id === id)
    setIsPurchased(!isPurchased);
  }

  // // NEU:
  // const [purchasedItems, setPurchasedItems] = useState(false);

  // function togglePurchasedItems(item) {
  //   // if (shoppingItem.id === id)
  //   setPurchasedItems((prev) => ({
  //     ...prev,
  //     [item.id]: !prev[item.id],
  //   }));
  // }

  return (
    <>
      <StyledHeader>
        <h1>Shopping Car-d</h1>
      </StyledHeader>

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

        {mode !== "add" && (
          <AddItemContainer>
            <>
              <p>...need anything else?</p>
              <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
            </>
          </AddItemContainer>
        )}
        <StyledH1>
          There&#39;s {shoppingItemsWithCategoryColor.length} things left to
          get:
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
                toggleIsPurchased={toggleIsPurchased}
                isPurchased={isPurchased}
                setIsPurchased={setIsPurchased}
              />
            );
          })}
        </StyledList>
      </main>
    </>
  );
}

const AddItemContainer = styled.div`
  gap: 10px;
`;

const StyledHeader = styled.header`
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: -4rem;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const AddButton = styled.button`
  display: flex;
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
