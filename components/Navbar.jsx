import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/ring.gif" alt="" width="50" height="50" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>618.555.1212</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/images/bobes-logo2.png"
            alt="Bobe's"
            width="250"
            height="100"
          />
          <li className={styles.listItem}>About</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Locations</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/images/cart2.gif" alt="pizza" width="70" height="70" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
