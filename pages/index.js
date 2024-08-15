import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  return (
    <main className={`${styles.main}`}>
      <h1 className={`${styles.heading}`}>
        Here´s your current Shopping List:
      </h1>
      <Link className={styles.link} href="/shoppingItemsList">
        Take a look!
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
