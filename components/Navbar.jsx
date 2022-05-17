import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

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
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>

          <Link href="/menu" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>

          <Link href="/products" passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <Image
            src="/images/bobes-logo2.png"
            alt="Bobe's"
            width="250"
            height="100"
          />
          <Link href="/about" passHref>
            <li className={styles.listItem}>About</li>
          </Link>

          <li className={styles.listItem}>Contact</li>
          <Link href="/locations" passHref>
            <li className={styles.listItem}>Locations</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/images/cart2.gif" alt="pizza" width="70" height="70" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
