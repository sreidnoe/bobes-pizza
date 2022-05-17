import styles from "../styles/Products.module.css";
import { Helmet } from "react-helmet";

const products = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className={styles.banner}>
        <h1 className={styles.header}>Product Gallery</h1>
      </div>
      <div className={styles.photoGrid}>
        <div className={styles.cardTall} id={styles.one}>
          <div className={styles.text}> Breadsticks </div>
        </div>
        <div className={styles.card} id={styles.two}>
          <div className={styles.text}> Brooklyn Cheese </div>
        </div>
        <div className={styles.card} id={styles.three}>
          <div className={styles.text}> Buffalo Chicken </div>
        </div>
        <div className={styles.card} id={styles.four}>
          <div className={styles.text} id={styles.farouk}>
            Farouk
          </div>
        </div>
        <div className={styles.cardWide} id={styles.five}></div>
        <div className={styles.card} id={styles.six}>
          <div className={styles.text} id={styles.cinnamon}>
            Cinnamon Sticks
          </div>
        </div>
        <div className={styles.card} id={styles.seven}>
          <div className={styles.text} id={styles.farouk}>
            Farouk
          </div>
        </div>

        <div className={styles.card} id={styles.eight}>
          <div className={styles.text}>Farouk Pizza Bowl</div>
        </div>
        <div className={styles.cardTall} id={styles.nine}></div>
        <div className={styles.cardTall} id={styles.ten}>
          <div className={styles.text}>Extra Cheesy</div>
        </div>
        <div className={styles.card} id={styles.eleven}>
          <div className={styles.text}>Small Farouk</div>
        </div>

        <div className={styles.card} id={styles.twelve}>
          <div className={styles.text}>Chicken Bacon Ranch</div>
        </div>
      </div>
    </div>
  );
};

export default products;
