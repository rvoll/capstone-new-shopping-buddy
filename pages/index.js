import Link from "next/link";

// import { shoppingItems } from "@/assets/shopping-items.json";

// import styles from "@/styles/Home.module.css";
// import { Mada } from "next/font/google";
// import { Bilbo_Swash_Caps } from "next/font/google";

// import fonts:

// const mada = Mada({
//   weight: "400",
//   subsets: ["latin"],
// });

// const bilbo_swash_caps = Bilbo_Swash_Caps({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function HomePage() {
  // return (
  //   <div>
  //     <h1>Shopping List</h1>
  //   </div>
  // );

  return (
    <main
    // className={`${styles.main} ${mada.className}`}
    >
      <h1
      // className={`${styles.heading} ${bilbo_swash_caps.className}`}
      >
        Shopping List
      </h1>

      <ul>
        <li>
          <Link
            // className={styles.link}
            href="/ShoppingItemDetails"
          >
            Details
          </Link>
        </li>
      </ul>
    </main>
  );
}
