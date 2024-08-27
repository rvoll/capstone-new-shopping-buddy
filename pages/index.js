import Link from "next/link";
import styled from "styled-components";

export default function ShoppingItemsList({ shoppingItemsWithCategoryColor }) {
  console.log(
    "shoppingItemsWithCategoryColor: ",
    shoppingItemsWithCategoryColor
  );
  return (
    <main>
      <StyledH1>
        {" "}
        {shoppingItemsWithCategoryColor.length} Shopping Items{" "}
      </StyledH1>
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => {
          return (
            <>
              <ListItem
                key={shoppingItem.id}
                $backgroundColor={shoppingItem.backgroundColor}
              >
                {shoppingItem.quantity} {shoppingItem.name}
                <CategoryBox>{shoppingItem.category}</CategoryBox>
                <StyledLink href={`/shoppingItems/${shoppingItem.id}`}>
                  Details
                </StyledLink>
              </ListItem>
            </>
          );
        })}
      </StyledList>
    </main>
  );
}

const StyledH1 = styled.h1`
  padding: 20px;
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 12px;
  align-content: start;
  list-style-type: none;
`;

// used in index.js and ShoppingItems/[id].js;
// eventually move to global styles
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
