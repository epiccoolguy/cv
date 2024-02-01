import type { Dictionary } from "@/lib/dictionary";

import styles from "@/styles/header.module.css";
import Image from "next/image";

type HeaderProps = Pick<Dictionary, "author" | "title">;

export default async function Header(props: HeaderProps) {
  const { author, title } = props;

  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <h1>
          <strong>{author}</strong>
        </h1>
        <h2>{title}</h2>
      </section>

      <section className={styles.right}>
        <div className={styles.photocontainer}>
          <Image
            className={styles.img}
            src="/images/photo.jpg"
            alt="Photo"
            height={1024}
            width={1024}
          />
        </div>
      </section>
    </header>
  );
}
