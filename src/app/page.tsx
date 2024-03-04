// import styles from "./page.module.css";

import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Been studying, but still can't speak your target language?</h1>
      <Link href="/login">
        Get Started!
      </Link>
    </main>
  );
}
