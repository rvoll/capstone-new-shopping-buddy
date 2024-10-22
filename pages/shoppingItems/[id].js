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
              // src={currentShoppingItem.imageUrl}
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
      <StyledLink href={`\..`}> ← Back to Shopping List</StyledLink>
    </main>
  );
}

const ShoppingItemDetailsContainer = styled.article`
  /* display: flex;
  position: relative;
  flex-direction: column;
  align-items: start; */
  display: grid;
  grid-template-columns: 0.2fr 1.6fr 0.4fr;
  grid-template-rows: 0.2fr 0.2fr 3fr 0.4fr 0.6fr;
  grid-template-areas:
    "empty category category"
    "itemname itemname quantity"
    "image image image"
    "subheading subheading subheading"
    "comment comment comment";

  background-color: ${(props) => props.$backgroundColor || "#c8c5ba"};
  padding: 20px 40px;
  border-radius: 8px;
`;

const CategoryBoxDetails = styled.span`
  /* display: flex;
  position: absolute; */
  /* top: 16%;
  right: 20px; */
  padding: 8px 16px;
  position: category;

  background-color: #c8c5ba;
  color: black;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: normal;
`;

const StyledImage = styled.image`
  width: 200;
  height: auto;
  /* grid-area: image; */
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
