import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Features";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobe's Pizza Albion</title>
        <meta
          name="description"
          content="BOBE'S PIZZA IN LAWRENCEVILLE, MT. CARMEL, OLNEY, ALBION AND VINCENNES"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
    </div>
  );
}
