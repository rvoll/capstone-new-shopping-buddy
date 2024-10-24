import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingItemDetails({
  shoppingItemsWithCategoryColor,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (!shoppingItemsWithCategoryColor || !id) {
    return <p>Loading...</p>;
  }

  const currentShoppingItem = shoppingItemsWithCategoryColor.find(
    (item) => item.id === id
  );

  if (!currentShoppingItem) {
    return <p>Shopping item not found</p>;
  }

  return (
    <main>
      {currentShoppingItem ? (
        <ShoppingItemDetailsContainer
          $backgroundColor={currentShoppingItem.backgroundColor}
        >
          <article>
            <h2>{currentShoppingItem.name}</h2>
            <CategoryBoxDetails>
              {currentShoppingItem.category}
            </CategoryBoxDetails>
            <h3>quantity: {currentShoppingItem.quantity}</h3>

            <Image
              src={`/images/${currentShoppingItem.imageUrl}`}
              alt={currentShoppingItem.name}
              style={{ objectFit: "contain" }}
              width={140}
              height={140}
            />
            <h3>comments: </h3>
            <p>{currentShoppingItem.comment}</p>
          </article>
        </ShoppingItemDetailsContainer>
      ) : (
        <p>Shopping item not found</p>
      )}
      <StyledLink href={`\..`}>Back to shopping list</StyledLink>
    </main>
  );
}

const StyledImage = styled.image`
  width: 200;
  height: auto;
`;

const CategoryBoxDetails = styled.span`
  display: flex;
  position: absolute;
  top: 16%;
  right: 20px;
  padding: 8px 16px;
  background-color: #c8c5ba;
  color: black;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: normal;
`;

const ShoppingItemDetailsContainer = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) => props.$backgroundColor || "#c8c5ba"};
  padding: 20px 40px;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
