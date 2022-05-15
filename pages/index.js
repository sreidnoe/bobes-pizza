import Head from "next/head";
import Featured from "../components/Features";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
<<<<<<< HEAD
        <title>Bobe's Pizza</title>
=======
        <title>Bobe's Pizza Albion</title>
>>>>>>> 9e74b7891a148344d20ff57ee6ca2c54d313bb6e
        <meta
          name="description"
          content="BOBE'S PIZZA IN LAWRENCEVILLE, MT. CARMEL, OLNEY, ALBION AND VINCENNES"
        />
        <link rel="icon" href="/favicon.ico" />
<<<<<<< HEAD
=======
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
>>>>>>> 9e74b7891a148344d20ff57ee6ca2c54d313bb6e
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
