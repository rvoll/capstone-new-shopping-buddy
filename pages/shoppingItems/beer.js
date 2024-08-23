import { useRouter } from "next/router";
import { shoppingItems } from "../../lib/shoppingItemsData.js";

export default function Beer() {
  const router = useRouter();
  const { id } = router.query;

  // Hier die Funktion: finde mir das shopping item mit der entsprechenden id
  // const shoppingItem = shoppingItems.find((id) => id.name === shoppingItems.id);
  // Corrected function to find the shopping item with the corresponding id
  const shoppingItem = shoppingItems.find((item) => item.id === id);

  return (
    <div>
      <p>It is working!</p>
    </div>
  );
}
