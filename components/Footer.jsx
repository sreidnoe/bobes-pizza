import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.next}>
        <Link>
        <p className={styles.hover} href="/">
          Home
        </p>
        </Link>
        
        <Link>
        <p className={styles.hover} href="/menu">
          Menu
        </p>
        </Link>
        
        <Link>
        <p className={styles.hover} href="/products">
          Products
        </p>
        </Link>
        
        <Link>
        <p className={styles.hover} href="/about">
          About
        </p>
        </Link>
        
        <Link>
         <p className={styles.hover} href="http://bobespizza.net/careers/">
          Careers
        </p>
        </Link>
       
       <Link>
       <p className={styles.hover} href="/locations">
          Locations
        </p>
       </Link>
        
        <Link>
        <p className={styles.hover} href="/cart">
          Cart
        </p>
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
