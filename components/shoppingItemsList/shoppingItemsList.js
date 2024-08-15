import React from "react";
import Link from "next/link";

export default function ShoppingItemsList() {
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

// // components/MyComponent.js
// import React from 'react';
// import styles from './MyComponent.module.css';
// import next from "next";

// export default function  ShoppingItemsList() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>My Stylish Component</h1>
//       {/* <p className={styles.content}>
//         This is where your content goes. It's now wrapped in a nice, styled component!
//       </p> */}
//       <ul>
//         {shoppingItems.map((shoppingItem) => (
//           <li className={styles.content} key={shoppingItem.slug}>
//             {shoppingItem.quantity} {shoppingItem.name}, {shoppingItem.category}
//             <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default MyComponent;
