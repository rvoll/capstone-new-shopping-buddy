import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingItem({
  shoppingItem,
  onEditItem,
  onDeleteItem,
  onChangeMode,
  onToggleIsPurchased,
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
              <label htmlFor={`checkbox-${shoppingItem.id}`}></label>
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
          <StyledButtonContainer>
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
              Details →
            </StyledLink>
          </StyledButtonContainer>
        </>
      ) : (
        <DeletionConfirmation>
          <StyledDeletionInquiry>
            Delete the {shoppingItem.name}?
          </StyledDeletionInquiry>
          <StyledButtonContainer>
            <button onClick={toggleIsToBeDeleted}>Cancel</button>
            <button
              onClick={() => {
                onDeleteItem(shoppingItem.id);
              }}
            >
              Delete
            </button>
          </StyledButtonContainer>
        </DeletionConfirmation>
      )}
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  padding: 10px;
  border-radius: 5px;
  position: relative;
  gap: 0.2rem;
`;

const CategoryBox = styled.span`
  margin-left: auto;
  align-self: flex-start;
  /* display: flex; */
  /* justify-content: flex-end; */
  /* position: absolute; */
  /* top: 5px;
  right: 5px; */
  padding: 2px 5px;
  background-color: #eee;
  color: #333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: normal;
`;

const StyledTickboxNameNumberContainer = styled.div`
  display: flex;
  /* position: start;  */
  margin-right: auto;
  align-self: flex-start;
  /* align-items: start; */
  /* bottom: 40%; */
  /* padding-left: 10%; */
  gap: 0.5rem;
  justify-content: space-between;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const DeleteButton = styled.button`
  /* display: flex;
  position: absolute; */
  /* bottom: 10%;
  right: 5rem; */
`;

const EditButton = styled.button`
  /* display: flex;
  position: absolute; */
  /* bottom: 10%;
  right: 10rem; */
`;

const StyledLink = styled(Link)`
  /* display: block; */
  /* margin-top: 30px;
  text-decoration: none; */
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

const DeletionConfirmation = styled.article`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  background-color: ${(props) => props.$backgroundColor};
  /* padding: 10px; */
  /* margin-left: 6rem; */
  border-radius: 5px;
  position: absolute;
  gap: 0.2rem;
`;

const StyledDeletionInquiry = styled.div`
  margin-top: 20px;
  align-self: flex-start;
  /* align-items: start; */
  /* bottom: 40%; */
  /* padding-left: 10%; */
`;
