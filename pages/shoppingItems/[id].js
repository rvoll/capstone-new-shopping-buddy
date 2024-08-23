import { useRouter } from "next/router";
import { shoppingItems } from "../../lib/shoppingItemsData.js";

export default function ShoppingItemDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Hier die Funktion: finde mir das shopping item mit der entsprechenden id
  // const shoppingItem = shoppingItems.find((id) => id.name === shoppingItems.id);
  // Corrected function to find the shopping item with the corresponding id
  const shoppingItem = shoppingItems.find(
    (item) => id.name === shoppingItems.id
  );

  return (
    <div>
      {shoppingItem ? (
        <>
          <h1>{shoppingItem.name}</h1>
          <p>Category: {shoppingItem.category}</p>
          <p>Quantity: {shoppingItem.quantity}</p>
          {/* <p>Comments: {shoppingItem.comments}</p> */}
          {/* Wie bekomme ich hier die comments rein, so dass */}
        </>
      ) : (
        <p>Shopping item not found</p>
      )}
    </div>
  );
}
