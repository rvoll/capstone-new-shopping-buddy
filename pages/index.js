import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
import { categories } from "@/lib/categoriesData";
import Image from "next/image";

// NEXT THNIG TO DO: fix colors and line-through!

export default function ShoppingItemsList({
  shoppingItemsWithCategoryColor,
  shoppingItems,
  setShoppingItems,
  onAddItem,
  onEditItem,
  onDeleteItem,
  purchasedItems,
  unpurchasedItems,
}) {
  const [mode, setMode] = useState("");

  const [editedItem, setEditedItem] = useState({});

  const [isPurchased, setIsPurchased] = useState("");

  // const [isPurchased, setIsPurchased] = useState("");
  // Don't I have to reset the shopping items in the ShoppingItem component?

  // ANGUCKEN UND VERSTEHEN:
  function handleToggleIsPurchased(item) {
    setShoppingItems((prevItems) =>
      prevItems.map((shoppingItem) =>
        shoppingItem.id === item.id
          ? { ...shoppingItem, isPurchased: !shoppingItem.isPurchased }
          : shoppingItem
      )
    );
  }
  // setIsPurchased((prev) => !prev);

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
          {/* <span style={{ letterSpacing: "-12px" }}> */}
          &#39;
          {/* </span> */}
          <span style={{ fontSize: 42 }}>A</span>lly
        </h1>
      </StyledHeader>

      <main>
        <Image
          alt="a raw sketch of a tote bag"
          src={"/images/tote-bag_01.png"}
          style={{ objectFit: "contain" }}
          width={60}
          height={60}
        />

        {shoppingItemsWithCategoryColor.length === 0 && (
          <AddItemContainer>
            <StyledNoItemsMessage>
              Your shopping list is empty. Wanna add anything?
            </StyledNoItemsMessage>
            <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
          </AddItemContainer>
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

        {mode !== "add" ||
          (!mode && (
            <AddItemContainer>
              <>
                <p>...need anything else?</p>
              </>
              <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
            </AddItemContainer>
          ))}

        {/* &#39;s */}
        {/* <br /> */}

        {/* Better have the two lists in two different containers so that 
        each is scrollable independent of the other? 
        Was this the idea of thee US?*/}
        {unpurchasedItems.length !== 0 && (
          <div>
            <StyledH2>
              {/* possibly add a little box with the number so that the text doesn't skip when */}
              {/* same for the quantity on the individual items - or if possible - have a span in a fixed position */}
              There {unpurchasedItems.length !== 1 ? "are" : "is"}{" "}
              {unpurchasedItems.length} thing
              {unpurchasedItems.length !== 1 ? "s" : ""}{" "}
              {purchasedItems.length !== 0 && "left"} to get:
            </StyledH2>
            <StyledList>
              {/* Gotta get the colors into an extended version of the shopping items array - which I then work with for the other extended versions...  */}
              {/* {shoppingItemsWithCategoryColor.map((shoppingItem) => { */}
              {unpurchasedItems.map((shoppingItem) => {
                //  GOTTA CHANGE THIS TO "unpurchasedItems" BUT THEN HOW TO GET THE COLORS BACK?
                return (
                  <ShoppingItem
                    key={shoppingItem.id}
                    shoppingItem={shoppingItem}
                    onDeleteItem={onDeleteItem}
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={handleToggleIsPurchased}
                    isPurchased={shoppingItem.isPurchased}
                    setIsPurchased={setIsPurchased}
                    purchasedItems={purchasedItems}
                    unpurchasedItems={unpurchasedItems}
                    shoppingItems={shoppingItems}
                  />
                );
              })}
            </StyledList>
          </div>
        )}
        {/* CHECK THIS: */}
        {unpurchasedItems.length === 0 && purchasedItems.length !== 0 && (
          <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
        )}
        {/*  */}
        {/* ADDED THIS - MAKE SURE IT WORKS! */}
        {/* display title or component conditionally - if purchasedItems > 0 */}

        {purchasedItems.length > 0 && (
          <div>
            <StyledH2>
              You already got {purchasedItems.length} thing
              {purchasedItems.length !== 1 && "s"}:
            </StyledH2>
            <StyledList>
              {/* Gotta get the colors into an extended version of the shopping items array - which I then work with for the other extended versions...  */}
              {purchasedItems.map((shoppingItem) => {
                return (
                  <ShoppingItem
                    key={shoppingItem.id}
                    shoppingItem={shoppingItem}
                    onDeleteItem={onDeleteItem}
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={handleToggleIsPurchased}
                    isPurchased={isPurchased}
                    setIsPurchased={setIsPurchased}
                    purchasedItems={purchasedItems}
                    unpurchasedItems={unpurchasedItems}
                    shoppingItems={shoppingItems}
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

// for the Layout US - create a global styles file!
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
