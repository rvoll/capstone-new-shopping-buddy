import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import { categories } from "@/lib/categoriesData";

// import Link;
// > to be styled later
// insert link to return to Shopping List;
// pass down props:
// id,
// name,
// quantity,
// category,
// styledH1,
// categoryBox

export default function ShoppingItem({
  id,
  name,
  quantity,
  category,
  StyledH1,
  CategoryBox,
}) {
  return (
    <>
      <main>
        <header>
          <StyledH1>
            {quantity} {name}
          </StyledH1>

          <Link href={`/shoppingItems/`}>Back to Shopping List</Link>
        </header>
        <body>
          <>
            <DetailsBox>
              {/* const backgroundColor = category ? category.color : "white"; */}
              {/* const comments = category ? category.comments : "no comment"; return */}
              (
              <>
                <p key={shoppingItem.id} backgroundColor={backgroundColor}>
                  {shoppingItem.quantity} {shoppingItem.name}
                  <CategoryBox>{shoppingItem.category}</CategoryBox>
                </p>

                <CommentsBox>{shoppingItem.comments}</CommentsBox>
              </>
              );
            </DetailsBox>
          </>
        </body>
      </main>
    </>
  );
}

const CommentsBox = styled.box`
  position: relative;
  top: 5px;
  right: 5px;
  padding: 2px 5px;
  background-color: #eee;
  color: #333;
  border-radius: 3px;
  font-size: 12px;
  font-weight: normal;
`;

const DetailsBox = styled.box`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 15px;
  background-color: backgroundColor;
  /* #eee; */
  /* color: #333; */
  border-radius: 3px;
  /* font-size: 12px;
  font-weight: normal; */
`;
