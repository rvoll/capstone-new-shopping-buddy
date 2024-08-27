import GlobalStyle from "../styles";
import { shoppingItems } from "../lib/shoppingItemsData.js";
import { categories } from "../lib/categoriesData.js";

export default function App({ Component, pageProps }) {
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
      />
    </>
  );
}
