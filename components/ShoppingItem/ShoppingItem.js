import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingItem({ onDeleteItem, shoppingItem }) {
  const [isToBeDeleted, setIsToBeDeleted] = useState(false);

  function toggleIsToBeDeleted() {
    setIsToBeDeleted(!isToBeDeleted);
  }

  return (
    <>
      <ListItem
        key={shoppingItem.id}
        $backgroundColor={shoppingItem.backgroundColor}
      >
        <CategoryBox>{shoppingItem.category}</CategoryBox>

        {!isToBeDeleted ? (
          <>
            {shoppingItem.quantity} {shoppingItem.name}
            <button
              onClick={() => {
                toggleIsToBeDeleted(shoppingItem.id);
              }}
              data-js="toggleIsToBeDeletedButton"
            >
              Delete this item{" "}
            </button>
            <StyledLink href={`/shoppingItems/${shoppingItem.id}`}>
              Details
            </StyledLink>
          </>
        ) : (
          <div>
            <p>Really delete the {shoppingItem.name}?</p>
            <button
              onClick={() => {
                toggleIsToBeDeleted(shoppingItem.id);
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
    </>
  );
}

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
