import Link from "next/link";
// import styles from "@/styles/Home.module.css";
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
    <main>
      <h1>Link to the Shopping List:</h1>
      <Link href="/shoppingItemList">Click here!</Link>
    </main>
  );
}
