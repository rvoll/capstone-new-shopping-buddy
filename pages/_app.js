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

  console.log(
    "shoppingItemsWithCategoryColor:",
    shoppingItemsWithCategoryColor
  );

  const purchasedItems = shoppingItemsWithCategoryColor.filter(
    (shoppingItem) => shoppingItem.isPurchased
  );

  const unpurchasedItems = shoppingItemsWithCategoryColor.filter(
    (shoppingItem) => shoppingItem.isPurchased === false
  );

  console.log("purchasedItems before handleAdd: ", purchasedItems);

  console.log("unpurchasedItems  before handleAdd: ", unpurchasedItems);

  function handleAddItem(newItem) {
    setShoppingItems([
      {
        id: nanoid(),
        isPurchased: false,
        ...newItem,
      },
      ...shoppingItems,
    ]);
  }

  console.log("purchasedItems after handleAdd: ", purchasedItems);

  console.log("unpurchasedItems  after handleAdd: ", unpurchasedItems);

  function handleEditItem(id, newItem) {
    setShoppingItems(
      shoppingItems.map((shoppingItem) => {
        if (shoppingItem.id === id) return { ...shoppingItem, ...newItem };
        return shoppingItem;
      })
    );
  }

  function handleDeleteItem(id) {
    setShoppingItems(
      shoppingItems.filter((shoppingItem) => shoppingItem.id !== id)
    );
  }

  function handleToggleIsPurchased(item) {
    setShoppingItems((prevItems) =>
      prevItems.map((shoppingItem) =>
        shoppingItem.id === item.id
          ? { ...shoppingItem, isPurchased: !shoppingItem.isPurchased }
          : shoppingItem
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        shoppingItems={shoppingItems}
        categories={categories}
        shoppingItemsWithCategoryColor={shoppingItemsWithCategoryColor}
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
