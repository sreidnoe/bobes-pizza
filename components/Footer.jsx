import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.next}>
        <Link href="/" passHref>
          <p className={styles.hover}>Home</p>
        </Link>

        <Link href="/menu" passHref>
          <p className={styles.hover}>Menu</p>
        </Link>

        <Link href="/products" passHref>
          <p className={styles.hover}>Products</p>
        </Link>

        <Link href="/about" passHref>
          <p className={styles.hover}>About</p>
        </Link>

        <Link href="http://bobespizza.net/careers/" passHref>
          <p className={styles.hover}>Careers</p>
        </Link>

        <Link href="/locations" passHref>
          <p className={styles.hover}>Locations</p>
        </Link>

        <Link href="/cart" passHref>
          <p className={styles.hover}>Cart</p>
        </Link>
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
