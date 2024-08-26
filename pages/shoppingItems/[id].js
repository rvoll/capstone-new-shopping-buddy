import { useRouter } from "next/router";
import { shoppingItems } from "../../lib/shoppingItemsData.js";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ShoppingItemDetails({ shoppingItem }) {
  const router = useRouter();
  const { id, backgroundColor, imageURL } = router.query;

  console.log(router.query);
  console.log("Image URL: ", imageURL);
  console.log(
    "Full Image Path: ",
    imageURL ? `/images/${imageURL}` : "/images/samplePicture.png"
  );

  const currentShoppingItem = shoppingItems.find((item) => item.id === id);

  return (
    <div>
      {currentShoppingItem ? (
        <>
          <ShoppingItemDetailsContainer $backgroundColor={backgroundColor}>
            <article>
              <h2>{currentShoppingItem.name}</h2>
              <CategoryBoxDetails>
                {currentShoppingItem.category}
              </CategoryBoxDetails>
              <h3>number: {currentShoppingItem.quantity}</h3>

              <Image
                src={
                  imageURL ? `/images/${imageURL}` : "/images/samplePicture.png"
                }
                priority={true}
                alt={currentShoppingItem.name}
                label={currentShoppingItem.name}
                caption={currentShoppingItem.name}
                layout="responsive"
                width={150}
                height={120}
              />
              <h3>comments: </h3>
              <p>{currentShoppingItem.comment}</p>
              <p>
                <Link href={`\..`}>Back to shopping list</Link>
              </p>
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
