import { useRouter } from "next/router";
import { shoppingItems } from "../../lib/shoppingItemsData.js";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingItemDetails({
  shoppingItemsWithCategoryColor,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentShoppingItem = shoppingItemsWithCategoryColor.find(
    (item) => item.id === id
  );

  if (!currentShoppingItem) {
    return <p>Shopping item not found</p>;
  }

  return (
    <div>
      {currentShoppingItem ? (
        <>
          <ShoppingItemDetailsContainer
            $backgroundColor={currentShoppingItem.backgroundColor}
          >
            <article>
              <h2>{currentShoppingItem.name}</h2>
              <CategoryBoxDetails>
                {currentShoppingItem.category}
              </CategoryBoxDetails>
              <h3>number: {currentShoppingItem.quantity}</h3>

              <Image
                src={
                  currentShoppingItem.imageUrl
                    ? `/images/${currentShoppingItem.imageUrl}`
                    : "/images/samplePicture.png"
                }
                alt={currentShoppingItem.name}
                style={{ objectFit: "contain" }}
                width={200}
                height={200}
              />
              <h3>comments: </h3>
              <p>{currentShoppingItem.comment}</p>
              <StyledLink href={`\..`}>Back to shopping list</StyledLink>
            </article>
          </ShoppingItemDetailsContainer>
        </>
      ) : (
        <p>Shopping item not found</p>
      )}
    </div>
  );
}

const StyledImage = styled.image`
  width: 200;
  height: auto;
`;

const CategoryBoxDetails = styled.span`
  display: flex;
  position: absolute;
  top: 40px;
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
