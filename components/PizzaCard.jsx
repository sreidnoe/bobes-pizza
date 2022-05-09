import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <div className={styles.pizza}>
        <Link href={`/product/${pizza._id}`}>
        <Image src={pizza.img} alt="Pizza" width="400" height="400" />
        </Link>
        
      </div>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.prices[0]}</span>
      <p className={styles.desc}>
        {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
