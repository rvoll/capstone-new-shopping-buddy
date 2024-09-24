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

  // 2 Listen!!!

  // AUFRÄUMEN und ggf. runterholen (in die index/shoppingItem.js)
  // DAS HIER AUSARBEITEN:
  const purchasedItems = shoppingItems.filter(
    (shoppingItem) => shoppingItem.isPurchased
  );

  // DAS HIER AUSARBEITEN:
  const unpurchasedItems = shoppingItems.filter(
    (shoppingItem) => shoppingItem.isPurchased === false
  );

  console.log("purchasedItems before handleAdd: ", purchasedItems);

  console.log("unpurchasedItems  before handleAdd: ", unpurchasedItems);

  //  bei create item: default isPurchased = false eintragen

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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
        categories={categories}
        shoppingItemsWithCategoryColor={shoppingItemsWithCategoryColor}
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        purchasedItems={purchasedItems}
        unpurchasedItems={unpurchasedItems}
      />
    </>
  );
}
