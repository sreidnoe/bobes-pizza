import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";
import Image from "next/image";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="http://bobespizza.net/careers/">Careers</a>
            </li>
            <li>
              <a href="/locations">Locations</a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
