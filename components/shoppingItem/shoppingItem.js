import React from "react";
import Link from "next/link";

export default function ShoppingItem({ id, name }) {
  return (
    <main>
      <h1>Shopping Items</h1>
      <ul>
        {shoppingItems.map((shoppingItem) => (
          <li key={shoppingItem.id}>
            {shoppingItem.quantity} {shoppingItem.name}, {shoppingItem.category}
            <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
