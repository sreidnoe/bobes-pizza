import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";
import Image from "next/image";
import Link from "next/link";

function Dropdown() {
  const [state, setstate] = useState(false);
  const showDropdown = () => {
    setstate(true);
  };
  const hideDropdown = () => {
    setstate(false);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownmenu}
        onClick={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className={styles.dropicon}>
          <Image
            className={styles.dropIcon}
            src="/images/pizza_menu.png"
            alt=" "
            width="75"
            height="75"
          />
          <div className={styles.pizza}>Menu</div>
        </div>

        {state ? (
          <ul className={styles.dropdownlist} onClick={showDropdown}>
            <li>
            <Link href="/" passHref>Home</Link>
            </li>
            <li>
            <Link href="/menu" passHref>Menu</Link>
            </li>
            <li>
            <Link href="/products" passHref>Products</Link>
            </li>
            <li>
            <Link href="/about" passHref>About</Link>
            </li>
            <li>
            <Link href="/http://bobespizza.net/careers/" passHref>Careers</Link>
            </li>
            <li>
            <Link href="/locations" passHref>Locations</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
