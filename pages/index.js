import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Features";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobe's Pizza Albion</title>
        <meta
          name="description"
          content="BOBE'S PIZZA IN LAWRENCEVILLE, MT. CARMEL, OLNEY, ALBION AND VINCENNES"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredericka+the+Great&family=Tapestry&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
