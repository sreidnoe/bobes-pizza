import Featured from "../components/Features";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
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
