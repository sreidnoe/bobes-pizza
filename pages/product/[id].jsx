import styles from "../../styles/Product.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/images/expizza.png",
    name: "DELUXE",
    price: [5.49, 7.99, 14.25, 17.25],
    desc: "Sausage, Pepperoni, Mushroom, Onion, Green Pepper, Canadian Bacon, Pineapple, Jalapeño, Pineapple",
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
        <meta
          name="description"
          content="BOBE'S PIZZA IN LAWRENCEVILLE, MT. CARMEL, OLNEY, ALBION AND VINCENNES"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredericka+the+Great&family=Tapestry&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            layout="fill"
            alt=""
            objectFit="contain"
            priority
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose Your Size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>6"</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>10"</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>14"</span>
          </div>
          <div className={styles.size} onClick={() => setSize(3)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>16"</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose Additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="extracheese"
              name="extracheese"
              className={styles.checkbox}
            />
            <label htmlFor="double">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="bacon"
              name="bacon"
              className={styles.checkbox}
            />
            <label htmlFor="double">Bacon</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />{" "}
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
