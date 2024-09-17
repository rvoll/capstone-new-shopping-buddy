import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingItem({
  id,
  onDeleteItem,
  shoppingItem,
  onEditItem,
  onChangeMode,
  mode,
  toggleIsPurchased,
  purchasedItems,
}) {
  const [isToBeDeleted, setIsToBeDeleted] = useState(false);

  const [isPurchased, setIsPurchased] = useState(false);

  // console.log("isPurchased 0: ", isPurchased);

  // console.log("isPurchased 1: ", isPurchased);

  function toggleIsToBeDeleted() {
    setIsToBeDeleted(!isToBeDeleted);
  }

  return (
    <ListItem
      key={shoppingItem.id}
      $backgroundColor={shoppingItem.backgroundColor}
    >
      <CategoryBox>{shoppingItem.category}</CategoryBox>

      {!isToBeDeleted ? (
        <>
          {shoppingItem.name}: {shoppingItem.quantity}
          <form>
            <input
              type="checkbox"
              id={`checkbox-${shoppingItem.id}`}
              checked={isPurchased.shoppingItem}
              onChange={() => {
                toggleIsPurchased(shoppingItem);
              }}
            />
            {/* TO DO: implement conditional text here!*/}
            <label htmlFor={`checkbox-${shoppingItem.id}`}>purchased </label>
          </form>
          <EditButton
            onClick={() => {
              onChangeMode();
              onEditItem();
            }}
            data-js="EditModeButton"
          >
            edit
          </EditButton>
          <DeleteButton
            onClick={() => {
              toggleIsToBeDeleted(shoppingItem);
            }}
            data-js="toggleIsToBeDeletedButton"
          >
            delete
          </DeleteButton>
          <StyledLink href={`/shoppingItems/${shoppingItem.id}`}>
            Details
          </StyledLink>
        </>
      ) : (
        <div>
          <p>delete {shoppingItem.name}?</p>
          <button
            onClick={() => {
              toggleIsToBeDeleted(shoppingItem);
            }}
            data-js="cancelDeleteButton"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onDeleteItem(shoppingItem.id);
            }}
            data-js="confirmDeleteButton"
          >
            Delete
          </button>
        </div>
      )}
    </ListItem>
  );
}

const DeleteButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 5rem;
`;

const EditButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 10rem;
`;

const DeletionConfirmation = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  margin-left: 6rem;
  border-radius: 5px;
  position: absolute;
`;

const ListItem = styled.li`
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  border-radius: 5px;
  position: relative;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryBox = styled.span`
  display: flex;
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
