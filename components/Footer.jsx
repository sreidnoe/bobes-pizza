import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/images/nom.jpg"
          alt="bobes"
          objectFit="scale-down"
          layout="fill"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>BOBE’S: A FAMILY TRADITION.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find a Location</h1>
          <p className={styles.text}>
            18 W Main St,
            <br /> Albion, IL 62806
            <br /> (618) 442-0044
          </p>
          <p className={styles.text}>
            808 State St
            <br />
            Lawrenceville, IL 62439
            <br />
            (618) 943-2612
          </p>
          <p className={styles.text}>
            620 W 9th St
            <br />
            Mount Carmel, IL 62863
            <br />
            (618) 450-2623
          </p>
          <p className={styles.text}>
            1610 E Main St
            <br /> Olney, IL 62450
            <br /> (618) 392-0553
          </p>
          <p className={styles.text}>
            812 Main St,
            <br /> Vincennes, IN 47591
            <br /> (812) 882-4546
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>Monday : 4pm - 9pm</p>
          <p className={styles.text}>
            Tuesday - Thursday : 11am - 1pm 4pm - 9pm
          </p>
          <p className={styles.text}>Friday - Sunday : 11am - 9pm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
