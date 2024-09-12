import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

// pass onEditItem down
// pass id down
export default function ShoppingItem({
  id,
  onDeleteItem,
  shoppingItem,
  onEditItem,
  onChangeMode,
  mode,
}) {
  const [isToBeDeleted, setIsToBeDeleted] = useState(false);

  // set UseState for isToBeEdited
  const [isToBeEdited, setIsToBeEdited] = useState(false);

  function toggleIsToBeDeleted() {
    setIsToBeDeleted(!isToBeDeleted);
  }

  function toggleIsToBeEdited() {
    setIsToBeEdited(!isToBeEdited);
  }

  return (
    <ListItem
      key={shoppingItem.id}
      $backgroundColor={shoppingItem.backgroundColor}
    >
      <CategoryBox>{shoppingItem.category}</CategoryBox>

      {!isToBeDeleted ? (
        <>
          {shoppingItem.quantity} {shoppingItem.name}
          {/* add isToBeEditedButton: */}
          {/* NewItem not needed as argument here, only in the form itself */}
          {/* use onChangeMode to change into edit mode, i.e. open up the edit-version of the form*/}
          <EditButton
            onClick={() => {
              onChangeMode(mode === "edit" ? "edit" : "edit");
            }}
            data-js="isToBeEditedButton"
          >
            edit
          </EditButton>
          {/* upon clicking on "edit", the form gets focused, prefilled and titled with sth. like "Edit the {id.name}"" */}
          {/* back to the index.js */}
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

// {/* add toggle isToDeEditedButton to cancel Editing */}
// <button
//   onClick={() => {
//     toggleIsToBeEdited(shoppingItem);
//   }}
//   data-js="cancelEditButton"
// >
//   Cancel
// </button>
// {/*  */}

const DeleteButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 5rem;
  /* padding: 2px 5px;
  background-color: #eee;
  color: #333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: normal; */
`;

const EditButton = styled.button`
  display: flex;
  position: absolute;
  bottom: 10%;
  right: 10rem;
  /* padding: 2px 5px;
  background-color: #eee;
  color: #333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: normal; */
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
