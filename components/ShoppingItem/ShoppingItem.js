import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingItem({
  onDeleteItem,
  shoppingItem,
  onEditItem,
  onChangeMode,
  onToggleIsPurchased,
  purchasedItems,
}) {
  const [isToBeDeleted, setIsToBeDeleted] = useState(false);

  function toggleIsToBeDeleted() {
    setIsToBeDeleted(!isToBeDeleted);
  }

  return (
    <ListItem
      $backgroundColor={shoppingItem.backgroundColor}
      $isPurchased={shoppingItem.isPurchased}
    >
      <CategoryBox>{shoppingItem.category}</CategoryBox>
      {!isToBeDeleted ? (
        <>
          <StyledTickboxNameNumberContainer>
            <form>
              <input
                type="checkbox"
                id={`checkbox-${shoppingItem.id}`}
                checked={shoppingItem.isPurchased}
                onChange={() => {
                  onToggleIsPurchased(shoppingItem.id);
                }}
              />
              <label htmlFor={`checkbox-${shoppingItem.id}`}>
                {purchasedItems.includes(shoppingItem.id) ? "purchased" : ""}
              </label>
            </form>
            <span
              style={
                shoppingItem.isPurchased
                  ? { textDecoration: "line-through", color: "#404040" }
                  : undefined
              }
            >
              {shoppingItem.name}: {shoppingItem.quantity}
            </span>
          </StyledTickboxNameNumberContainer>
          <EditButton
            onClick={() => {
              onChangeMode();
              onEditItem();
            }}
          >
            edit
          </EditButton>
          <DeleteButton onClick={toggleIsToBeDeleted}>delete</DeleteButton>
          <StyledLink href={`/shoppingItems/${shoppingItem.id}`}>
            Details
          </StyledLink>
        </>
      ) : (
        <div>
          <p>Delete the {shoppingItem.name}?</p>
          <button onClick={toggleIsToBeDeleted}>Cancel</button>
          <button
            onClick={() => {
              onDeleteItem(shoppingItem.id);
            }}
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

const StyledTickboxNameNumberContainer = styled.div`
  display: flex;
  position: start;
  bottom: 40%;
  padding-left: 10%;
  gap: 1rem;
  justify-content: space-between;
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
