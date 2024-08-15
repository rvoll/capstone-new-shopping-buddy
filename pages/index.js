import { shoppingItems } from "../lib/shoppingItemsData.js";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ShoppingItemsList() {
  const router = useRouter();

  function ShoppingItem() {}

  return (
    <main>
      <h1> Shopping Items ({shoppingItems.length}) </h1>
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
