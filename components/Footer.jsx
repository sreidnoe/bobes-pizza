import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.next}>
        <div className={styles.hover}>
          <Link href="/" passHref>
            <p>Home</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="/menu" passHref>
            <p>Menu</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="/products" passHref>
            <p>Products</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="/about" passHref>
            <p>About</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="https://bobespizza.net/careers/" passHref>
            <p>Careers</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="/locations" passHref>
            <p>Locations</p>
          </Link>
        </div>

        <div className={styles.hover}>
          <Link href="/cart" passHref className={styles.hover}>
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <div className={styles.workContainer}>
        <div className={styles.workHours}>Working Hours</div>
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
