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
          
            <Link href="/" passHref>
              <li>Home</li>
            </Link>
            
            <Link href="/menu" passHref>
              <li>Menu</li>
            </Link>
            
            <Link href="/products" passHref>
              <li>Products</li>
            </Link>
            
            <Link href="/about" passHref>
              <li>About</li>
            </Link>
            
            <Link href="/http://bobespizza.net/careers/" passHref>
              <li>Careers</li>
            </Link>
            
            <Link href="/locations" passHref>
              <li>Locations</li>
            </Link>
            
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
