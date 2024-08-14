import Link from "next/link";
import styles from "@/styles/Home.module.css";
// import { Mada } from "next/font/google";
// import { Bilbo_Swash_Caps } from "next/font/google";

// const mada = Mada({
//   weight: "400",
//   subsets: ["latin"],
// });

// const bilbo_swash_caps = Bilbo_Swash_Caps({
//   weight: "400",
//   subsets: ["latin"],
// });

export default function HomePage() {
  return (
    <main className={`${styles.main}`}>
      <h1 className={`${styles.heading}`}>
        Here´s your current Shopping List:
      </h1>
      <Link className={styles.link} href="/shoppingItemList">
        Click here!
      </Link>
    </main>
  );
}

{
  /* <main className={`${styles.main}`}>
  <h1 className={`${styles.heading}`}>Link to the volume overview:</h1>
  <Link className={styles.link} href="/volumes">
    Click here!
  </Link>
</main>; */
}
