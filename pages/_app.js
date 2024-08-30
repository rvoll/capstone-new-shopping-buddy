import GlobalStyle from "../styles";
import { shoppingItems as initialShoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(initialShoppingItems);

  function handleAddItem(newItem) {
    // Where do you get the new item?
    // const ... in Create form
    setShoppingItems([
      {
        id: nanoid(),
        ...newItem,
      },
      ...shoppingItems,
      // Why here shoppingItems and above initialShoppingItems?
    ]);
  }

  // CRUD: delete
  // Reactstate 3: removing an object
  // mit map, damit wir eine Kopie bekommen und nicht das ursprgl. array mutieren
  // create a new object / array
  // use the setter function with the recently created / updated copy in order to cause a re-render

  // Woher bekomme ich das itemToBeRemoved?
  // in Delete Item component:
  // const newItem = Object.fromEntries(formData);
  // ???
  //
  // handleSelectItemToDelete() {
  //   setShoppingItems(
  //     shoppingItems.find(
  //       (shoppingItem) => shoppingItem === currentShoppingItem)
  //     // or shoppingItem !== itemToBeRemoved ??
  //   );
  // }

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
        onDeleteItem={handleDeleteItem}
        categories={categories}
      />
    </>
  );
}
