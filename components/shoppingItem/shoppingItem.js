import React from "react";
import Link from "next/link";

export default function ShoppingItem({ id, name, quantity, category }) {
  return (
    <>
      <h1>
        {shoppingItem.quantity} {shoppingItem.name}
      </h1>
      <p> {shoppingItem.category}</p>
    </>
  );
}

{
  /* <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link> */
}
