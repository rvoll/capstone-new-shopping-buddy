import GlobalStyle from "../styles";
import { shoppingItems as initialShoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(initialShoppingItems);
  // for editing:
  const [showForm, setShowForm] = useState(false);

  function handleAddItem(newItem) {
    console.log("blah");

    setShoppingItems([
      {
        id: nanoid(),
        ...newItem,
      },
      ...shoppingItems,
    ]);
  }

  // edit-function:
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        shoppingItemsWithCategoryColor={shoppingItemsWithCategoryColor}
        onAddItem={handleAddItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        categories={categories}
        // for editing:
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </>
  );
}
