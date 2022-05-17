import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.next}>
        <a className={styles.hover1} href="/">Home </a>
        <a className={styles.hover2} href="/menu">Menu </a>
        <a className={styles.hover3} href="/products">Products </a>
        <a className={styles.hover4} href="/about">About </a>
        <a className={styles.hover5} href="/contact">Contact </a>
        <a className={styles.hover6} href="/locations">Locations </a>
        <a className={styles.hover7} href="/cart">Cart</a>
      </div>
      <div className={styles.workContainer}>
        <div className={styles.workHours}>
          Working Hours
        </div>
        <div className={styles.hours}>
          Monday: 4pm - 9pm <br></br>
          Tuesday-Thursday: 11am - 1pm<br></br>
          Friday-Sunday: 11am - 9pm
        </div>
      </div>

    </div>


  );
};

export default Footer;
