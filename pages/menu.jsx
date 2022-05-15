import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Head from "next/head";

const menu = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu</title>
        <meta
          name="description"
          content="BOBE'S PIZZA IN LAWRENCEVILLE, MT. CARMEL, OLNEY, ALBION AND VINCENNES"
        />
        <link rel="icon" href="/images/pizza_pic.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fredericka+the+Great&family=Tapestry&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.menu}>
        <h2 className={styles.heading}>Appetizers</h2>
        <div className={styles.menuGroup}>
          <div className={styles.menuItem}>
            <div className={styles.menuItemText}>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Garlic Bread</span>
                <span className={styles.menuItemPrice}>8" $4.00 12" $6.00</span>
              </h3>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Garlic Cheese Bread</span>

                <span className={styles.menuItemPrice}>8" $5.00 12" $7.00</span>
              </h3>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Pepperoni Bread</span>
                <span className={styles.menuItemPrice}>8" $5.50 12" $7.50</span>
              </h3>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuItemText}>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Breadsticks</span>

                <span className={styles.menuItemPrice}>$4.00</span>
              </h3>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Extra Dipping Sauce</span>
                <span className={styles.menuItemPrice}>$1.00</span>
              </h3>
              <h3 className={styles.menuItemHeading}>
                <span className={styles.menuItemName}>Pepperoncini</span>
                <span className={styles.menuItemPrice}>$1.00</span>
              </h3>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.left}>
            <h2 className={styles.headingSmall}>Toasted Sandwiches</h2>
          </div>
          <div className={styles.right}>
            <h2 className={styles.headingSmall}>Cinnamon Sticks</h2>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h3 className={styles.fillSmall}>8" - $6 | 12" - $9.50</h3>
            <h3 className={styles.fillSmall}>Add Meat - +$0.50</h3>
            <h3 className={styles.fillSmall}>Add Veggie - +$0.50</h3>
          </div>
          <div className={styles.right}>
            <div className={styles.cinnamon}>
              <h3 className={styles.fillSmall}>Half Order $5.00</h3>
              <h3 className={styles.fillSmall}>Whole Order $8.00</h3>
            </div>
          </div>
        </div>




        <h2 className={styles.heading}>Specialty Sandwiches</h2>
        <div className={styles.toasted}>
          <div className={styles.leftSand}>
            <div>
              <h3 className={styles.sandName}>Stromboli - $7.25 / $9.50</h3>
              <p className={styles.sandInfo}>Sausage, Pepperoni, Onions</p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Farouk Stromboli - $7.75 / $11.25
              </h3>
              <p className={styles.sandInfo}>
                Sausage, Pepperoni, Mushrooms, Onions, Green Peppers
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Chicken Bacon Ranch - $7.00 / $10.50
              </h3>
              <p className={styles.sandInfo}>Chicken, Bacon, & Ranch </p>
            </div>
          </div>
          <div className={styles.rightSand}>
            <div>
              <h3 className={styles.sandName}>
                Buffalo Chicken - $7.00 / $10.50
              </h3>
              <p className={styles.sandInfo}>
                Chicken in Our Spicy Buffalo Sauce
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Honey Mustard Chicken - $7.00 / $10.50
              </h3>
              <p className={styles.sandInfo}>
                Chicken in Our Sweet Honey Mustard Sauce
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>BBQ Chicken - $6.75 / $10.25</h3>
              <p className={styles.sandInfo}>
                Get a Taste of Memphis with Our Tangy BBQ Chicken
              </p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <h2 className={styles.headingSmall}>Pizza Options</h2>
          </div>
          <div className={styles.right}>
            <h2 className={styles.headingSmall}>Pizza Bowl</h2>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h3 className={styles.fillSmall}>Medium Deep Dish | +$2.00</h3>
            <h3 className={styles.fillSmall}>Large Deep Dish | +$4.00</h3>
            <h3 className={styles.fillSmall}>Cauliflower Crust | +$11.50</h3>
            <h4 className={styles.fillSmall}>Make any pizza a meal for $4</h4>
          </div>
          <div className={styles.right}>
            <div className={styles.bowl}>
              <h3 className={styles.fillSmall}>Crustless Pizza Bowl | $5.00</h3>
              <h5 className={styles.fillSmall}>
                Meat: First Topping - $1.50 | Second + - $1.00
              </h5>
              <h5 className={styles.fillSmall}>
                Veggie: First Topping - $0.50 | Second + - $.25
              </h5>
            </div>
          </div>
        </div>

        <h2 className={styles.heading}>Specialty Pizzas ( 11" or 15" )</h2>
        <div className={styles.toasted}>
          <div className={styles.leftSand}>
            <div>
              <h3 className={styles.sandName}>Extra Cheesy - $9.50|$15.00</h3>
              <p className={styles.sandInfo}>For the Cheese Lover!</p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Brooklyn Cheese - $9.50|$15.00
              </h3>
              <p className={styles.sandInfo}>
                Cheese Pizza Seasoned With Garlic, Pizza Crack & Crushed Red
                Pepper Flakes.
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>Farouk - $13.00 / $20.75</h3>
              <p className={styles.sandInfo}>
                Sausage, Pepperoni, Mushrooms, Onions, Green Peppers
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>Meat Lovers - $13.00 / $20.75</h3>
              <p className={styles.sandInfo}>Sausage, Pepperoni, Bacon</p>
            </div>
            <div>
              <h3 className={styles.sandName}>Vegetarian - $11.25 / $18.25</h3>
              <p className={styles.sandInfo}>
                Mushrooms, Onions, Black Olives, Green Olives, Green Peppers,
                Banana Peppers{" "}
              </p>
            </div>
          </div>
          <div className={styles.rightSand}>
            <div>
              <h3 className={styles.sandName}>Brett B's - $9.50 / $18.00</h3>
              <p className={styles.sandInfo}>
                Pepperoni, Pepperoncinis, Garlic Salt
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Buffalo Chicken - $13.50 / $22.00
              </h3>
              <p className={styles.sandInfo}>
                Chicken in Our Spicy Buffalo Sauce
              </p>
            </div>
            <div>
              <h3 className={styles.sandName}>
                Chicken Bacon Ranch - $12.75 / $20.50
              </h3>
              <p className={styles.sandInfo}>Chicken, Bacon, & Ranch</p>
            </div>

            <div>
              <h3 className={styles.sandName}>
                Honey Mustard Chicken - $12.75 / $20.50
              </h3>
              <p className={styles.sandInfo}>
                Chicken in Our Sweet Honey Mustard Sauce
              </p>
            </div>

            <div>
              <h3 className={styles.sandName}>BBQ Chicken - $12.25 / $19.50</h3>
              <p className={styles.sandInfo}>
                Get a Taste of Memphis with Our Tangy BBQ Chicken{" "}
              </p>
            </div>
          </div>
        </div>
        <h2 className={styles.heading}>Build Your Own Pizza</h2>
        <div className={styles.build}>
          <div className={styles.buildOwn}>
            <p>
              Start with our made from scratch crust in a regular or deep dish,
              add our special blend of tomato sauce and top with a high quality
              Mozzarella Cheese.
            </p>
          </div>
          <div className={styles.pizzaContainer}>
            <div className={styles.leftPizza}>
              <div>
                <h3 className={styles.build}>Pizzas</h3>
                <p className={styles.sandName}>Choose your Size:</p>
                <div>
                  <table className={styles.table}>
                    <tbody>
                      <tr className={styles.trTitle}>
                        <th>Small</th>
                        <th>Medium</th>
                        <th>Large</th>
                      </tr>
                      <tr className={styles.tr}>
                        <td>
                          <span className={styles.size}>6"</span>
                        </td>
                        <td>
                          <span className={styles.size}>11"</span>
                        </td>
                        <td>
                          <span className={styles.size}>15"</span>
                        </td>
                      </tr>
                      <tr className={styles.tr}>
                        <td>
                          <span className={styles.size}>$6.00</span>
                        </td>
                        <td>
                          <span className={styles.size}>$9.50</span>
                        </td>
                        <td>
                          <span className={styles.size}>$15.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className={styles.rightPizza}>
              <div>
                <h3 className={styles.sandName}>11" Topping Price</h3>
                <p className={styles.sandInfo}>
                  Meat: 1st topping $1.50, second+ $1.00
                </p>
                <p className={styles.sandInfo}>
                  Veggie: 1st topping $0.50, second+ $0.25
                </p>
              </div>
              <div>
                <h3 className={styles.sandName}>15" Topping Price</h3>
                <p className={styles.sandInfo}>
                  Meat: 1st topping $2.25, second+ $1.75
                </p>
                <p className={styles.sandInfo}>
                  Veggie: 1st topping $0.75, second+ $0.50
                </p>
              </div>
            </div>
          </div>
          <div className={styles.toppings}>
            <h3 className={styles.sandName}>Toppings</h3>
            <p className={styles.sandInfo}>
              Meat Choices: Pepperoni, Sausage, Chicken, Crumbled Bacon
            </p>
            <p className={styles.sandInfo}>
              Veggie Choices: Mushrooms, Onions, Pineapple, Green Peppers, Black
              Ovilves, Green Olives, Banana Peppers, Jalapenos, Pepperoncinis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
