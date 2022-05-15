import styles from "../../styles/Product.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

//placeholder text, delete when seen.
//also this too.

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(+option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose Your Size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>6"</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>10"</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/images/dot.png" layout="fill" alt="" />
            <span className={styles.number}>14"</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose Additional Ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
