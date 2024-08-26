import { shoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";
import Link from "next/link";
import styled from "styled-components";

export default function ShoppingItemsList() {
  const shoppingItemsWithCategoryColor = shoppingItems.map((shoppingItem) => {
    const category = categories.find(
      (category) => category.name === shoppingItem.category
    );
    const backgroundColor = category ? category.color : "white";
    return {
      ...shoppingItem,
      backgroundColor,
    };
  });

  return (
    <main>
      <StyledH1> {shoppingItems.length} Shopping Items </StyledH1>
      <StyledList>
        {shoppingItemsWithCategoryColor.map((shoppingItem) => (
          <ListItem
            key={shoppingItem.id}
            $backgroundColor={shoppingItem.backgroundColor}
          >
            {shoppingItem.quantity} {shoppingItem.name}
            <CategoryBox>{shoppingItem.category}</CategoryBox>
            <p>
              <Link
                href={{
                  pathname: `/shoppingItems/${shoppingItem.id}`,
                  query: {
                    backgroundColor: shoppingItem.backgroundColor,
                    imageURL: shoppingItem.imageUrl,
                  },
                }}
              >
                Details
              </Link>
            </p>
          </ListItem>
        ))}
      </StyledList>
      {/* <Link>...</Link> */}
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
