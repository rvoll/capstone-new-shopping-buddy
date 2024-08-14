import { shoppingItems } from "../lib/data.js";
// import { categories } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  //   function getRandomElement(array) {
  //     return array[Math.floor(Math.random() * array.length)];
  //   }

  //   function handleClick() {
  //     const randomVolume = getRandomElement(volumes);
  //     const randomSlug = randomVolume.slug;
  //     router.push(`/volumes/${randomSlug}`);
  //   }

  return (
    <main>
      <h1>Shopping Items</h1>
      <ul>
        {shoppingItems.map((shoppingItem) => (
          <li key={shoppingItem.slug}>
            {shoppingItem.quantity} {shoppingItem.name},{shoppingItem.category}
            <Link href={`/shoppingItems/${shoppingItem.slug}`}>Details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// export default function ItemsList() {
//     return (
//       <main
//       // className={`${styles.main} ${mada.className}`}
//       >
//         <h1
//         // className={`${styles.heading} ${bilbo_swash_caps.className}`}
//         >
//           Shopping List
//         </h1>

//         <ul>
//           <li>
//             <h2
//             // className={`${styles.heading} ${bilbo_swash_caps.className}`}
//             >
//               food item name: insert variableLink
//             </h2>
//             <ul>
//               <li>quantity</li>
//               <li>category</li>
//             </ul>

//             <Link
//               // className={styles.link}
//               href="/ShoppingItemDetails/$[slug]"
//             >
//               Details
//             </Link>
//           </li>
//         </ul>
//       </main>
//     );
//   }
