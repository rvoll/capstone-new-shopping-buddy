import styled from "styled-components";
import Form from "@/components/Form/Form.js";
import ShoppingItem from "@/components/ShoppingItem/ShoppingItem.js";
import { useState } from "react";
import Image from "next/image";

export default function ShoppingItemsList({
  onAddItem,
  onEditItem,
  onDeleteItem,
  onToggleIsPurchased,
  purchasedItems,
  unpurchasedItems,
}) {
  const [mode, setMode] = useState("default");

  const [editedItem, setEditedItem] = useState({});

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
          src={"/images/tote-bag_02.png"}
          style={{ objectFit: "contain" }}
          width={60}
          height={60}
        />
      </StyledHeader>

      <main>
        {mode === "default" && (
          <AddItemContainer>
            {unpurchasedItems.length === 0 ? (
              purchasedItems.length === 0 ? (
                <StyledNoItemsMessage>
                  Your shopping list is empty. Do you need anything?
                </StyledNoItemsMessage>
              ) : (
                <StyledAllItemsPurchasedMessage>
                  You have got everything on your list. Do you need anything
                  else?
                </StyledAllItemsPurchasedMessage>
              )
            ) : (
              <StyledNoItemsMessage>
                ...need anything else?
              </StyledNoItemsMessage>
            )}
            <AddButton onClick={() => handleChangeMode("add")}>+</AddButton>
          </AddItemContainer>
        )}
        {mode === "edit" && (
          <Form
            onSubmitItem={onEditItem}
            item={editedItem}
            onChangeMode={handleChangeMode}
          />
        )}
        {mode === "add" && (
          <Form onSubmitItem={onAddItem} onChangeMode={handleChangeMode} />
        )}
        {unpurchasedItems.length > 0 && (
          <div>
            <StyledH2>
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
                    onDeleteItem={onDeleteItem}
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={onToggleIsPurchased}
                    purchasedItems={purchasedItems}
                    unpurchasedItems={unpurchasedItems}
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
                    onEditItem={() => setEditedItem(shoppingItem)}
                    onChangeMode={() => handleChangeMode("edit")}
                    onToggleIsPurchased={onToggleIsPurchased}
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1.5rem;
  margin-bottom: -4rem;
  /* row-gap: 6px; */
  gap: 10px;
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

const StyledAllItemsPurchasedMessage = styled.p`
  display: flex;
  align-items: start;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  font-size: 0.8rem;
`;
