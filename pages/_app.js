import GlobalStyle from "../styles";
import { shoppingItems as initialShoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(initialShoppingItems);

  const shoppingItemsWithCategoryColor = shoppingItems.map((shoppingItem) => {
    const category = categories.find(
      (category) => category.name === shoppingItem.category
    );

    const backgroundColor = category ? category.color : "white";

    return {
      ...shoppingItem,
      backgroundColor,
    };
  });

  const purchasedItems = shoppingItemsWithCategoryColor.filter(
    (shoppingItem) => shoppingItem.isPurchased
  );

  const unpurchasedItems = shoppingItemsWithCategoryColor.filter(
    (shoppingItem) => shoppingItem.isPurchased === false
  );

  function handleAddItem(newItem) {
    setShoppingItems((prevItems) => [
      {
        id: nanoid(),
        isPurchased: false,
        ...newItem,
      },
      ...prevItems,
    ]);
  }

  function handleEditItem(id, newItem) {
    setShoppingItems((prevItems) =>
      prevItems.map((shoppingItem) => {
        if (shoppingItem.id === id) {
          return { ...shoppingItem, ...newItem };
        }
        return shoppingItem;
      })
    );
  }

  function handleDeleteItem(id) {
    setShoppingItems((prevItems) =>
      prevItems.filter((shoppingItem) => shoppingItem.id !== id)
    );
  }

  function handleToggleIsPurchased(id) {
    setShoppingItems((prevShoppingItems) =>
      prevShoppingItems.map((prevShoppingItem) =>
        prevShoppingItem.id === id
          ? { ...prevShoppingItem, isPurchased: !prevShoppingItem.isPurchased }
          : prevShoppingItem
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        categories={categories}
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        purchasedItems={purchasedItems}
        unpurchasedItems={unpurchasedItems}
        onToggleIsPurchased={handleToggleIsPurchased}
      />
    </>
  );
}
