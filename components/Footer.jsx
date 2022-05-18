import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.next}>
        <a className={styles.hover} href="/">
          Home
        </a>
        <a className={styles.hover} href="/menu">
          Menu
        </a>
        <a className={styles.hover} href="/products">
          Products
        </a>
        <a className={styles.hover} href="/about">
          About
        </a>
        <a className={styles.hover} href="http://bobespizza.net/careers/">
          Careers
        </a>
        <a className={styles.hover} href="/locations">
          Locations
        </a>
        <a className={styles.hover} href="/cart">
          Cart
        </a>
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
