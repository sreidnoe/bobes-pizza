import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pizza}>
        <Image src="/images/example.png" alt="Pizza" width="400" height="400" />
      </div>
      <h1 className={styles.title}>Meat Lovers</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Sausage, Pepperoni, Canadian Bacon, and Crumbled Bacon
      </p>
    </div>
  );
};

export default PizzaCard;
