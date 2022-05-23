import styles from "../styles/About.module.css";
import { Helmet } from "react-helmet";

const about = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1 className={styles.title}>
        WE MAKE PIZZA HOW YOU LIKE IT, FROM SCRATCH.
      </h1>
      <p className={styles.desc}>
        When you are craving cheesy pizza that is made
        from scratch and has been a local favorite since the 1950s, theres only
        one place to go, Bobe's Pizza. All of our pizzas are made with the
        freshest of ingredients.Hand prepared, never frozen. From our signature
        crust to our mouthwatering, cheese, everything is prepared to order by
        our awesome pizza pros. <br />
        <br />
         It is a tradition that began in the early 1950s
        by Billy Bobe- a cook in the merchant marines during World War II and in
        the army during the Korean War. He began making pizzas in his home after
        his travels and experimented until settling on the recipe we still use
        today. He opened his business in 1955 at its current location on 6th
        Street in Vincennes, Indiana.
        <br />
        <br /> At the time, it was the only pizza
        available for 80 miles. Larry, Billys younger brother, started managing
        the pizzeria at the age of 17 years old. Its a craft hes been
        mastering his entire life and one he came to call his own when he opened
        his doors on the corner of 9th and State Street in Lawrenceville
        Illinois.
      </p>
    </div>
  );
};

export default about;
