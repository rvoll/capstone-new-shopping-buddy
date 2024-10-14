import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
// import { categories } from "@/lib/categoriesData";
import Image from "next/image";

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  // backgroundColor,
  // shoppingItems,
  onAddItem,
  onEditItem,
  onDeleteItem,
  onToggleIsPurchased,
  purchasedItems,
  unpurchasedItems,
}) {
  const [mode, setMode] = useState("default");

  const [editedItem, setEditedItem] = useState({});

  // const [isPurchased, setIsPurchased] = useState("");

  function handleChangeMode(mode) {
    setMode(mode);
  }

  return (
    <>
      <StyledHeader>
        <h1>
          Tot
          <span style={{ fontSize: 30, color: "green", letterSpacing: "-8px" }}>
            e
          </span>
          &#39;
          <span style={{ fontSize: 42 }}>A</span>lly
          <br></br>
          <span
            style={{
              fontSize: 20,
              color: "green",
            }}
          >
            ...baggin&#39; it.
          </span>
        </h1>

        <Image
          alt="drawing of a smiling tote bag"
          // replace src:
          src={"/images/tote-bag_01.png"}
          style={{ objectFit: "contain" }}
          width={50}
          height={50}
        />
      </StyledHeader>
      <main>
        {mode !== "edit" && mode !== "add" && (
          <AddItemContainer>
            {shoppingItemsWithCategoryColor.length === 0 && (
              <StyledNoItemsMessage>
                Your shopping list is empty. Do you need anything?
              </StyledNoItemsMessage>
            )}
            <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
          </AddItemContainer>
        )}
        {mode === "edit" && (
          <Form
            onSubmitItem={onEditItem}
            // categories={categories}
            item={editedItem}
            submitLabel={"update"}
            onChangeMode={handleChangeMode}
            // mode={mode}
          />
        )}
        {mode === "add" && (
          <Form
            onSubmitItem={onAddItem}
            // categories={categories}
            // submitLabel={"submit"}
            onChangeMode={handleChangeMode}
            // mode={mode}
          />
        )}
        {mode !== "add" ||
          (!mode && (
            <AddItemContainer>
              <>
                <p>...need anything else?</p>
              </>
              <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
            </AddItemContainer>
          ))}
        {unpurchasedItems.length > 0 && (
          <div>
            {/* FIX OR DELETE THIS:
            //  */}
            {/* <StyledH2>
              {/* {purchasedItems.length === 0 ? "We need " :  */}
            {/* Your list contains
              {unpurchasedItems.length + purchasedItems.length} things.
            </StyledH2> */}

            <StyledH2>
              {/* {purchasedItems.length === 0 ? "We need " :  */}
              There&#39;s {/* } */}
              {unpurchasedItems.length} thing
              {unpurchasedItems.length !== 1 ? "s" : ""}{" "}
              {purchasedItems.length !== 0 ? "left to get" : "on your list"}:
            </StyledH2>
            <StyledList>
              {unpurchasedItems.map((shoppingItem) => {
                return (
                  <ShoppingItem
                    key={shoppingItem.id}
                    shoppingItem={shoppingItem}
                    // shoppingItemsWithCategoryColor={
                    //   shoppingItemsWithCategoryColor
                    // }
                    // backgroundColor={backgroundColor}
                    onDeleteItem={onDeleteItem}
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={onToggleIsPurchased}
                    purchasedItems={purchasedItems}
                    unpurchasedItems={unpurchasedItems}
                    // shoppingItems={shoppingItems}
                  />
                );
              })}
            </StyledList>
          </div>
        )}

        {purchasedItems.length > 0 && (
          <div>
            <StyledH2>
              You already got {purchasedItems.length} thing
              {purchasedItems.length !== 1 && "s"}:
            </StyledH2>
            <StyledList>
              {purchasedItems.map((shoppingItem) => {
                return (
                  <ShoppingItem
                    key={shoppingItem.id}
                    shoppingItem={shoppingItem}
                    onDeleteItem={onDeleteItem}
                    // Andrea suggested to modify the lines below
                    // but I don't think this makes sense - unless maybe if I would include
                    // changeMode in the other functions (onEdit, etc.)
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={onToggleIsPurchased}
                    purchasedItems={purchasedItems}
                    unpurchasedItems={unpurchasedItems}
                    // shoppingItems={shoppingItems}
                  />
                );
              })}
            </StyledList>
          </div>
        )}
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
  row-gap: 6px;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledH2 = styled.h2`
  text-align: start;
`;
StyledH1;

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
