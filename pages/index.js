import { shoppingItems } from "../lib/categoriesData.js/index.js";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ShoppingItemsList() {
  const router = useRouter();

  return (
    <main>
      <h1>Shopping Items</h1>
      <ul>
        {shoppingItems.map((shoppingItem) => (
          <li key={shoppingItem.slug}>
            {shoppingItem.quantity} {shoppingItem.name}, {shoppingItem.category}
            <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
