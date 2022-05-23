import styles from "../styles/Locations.module.css";

import Link from "next/link";

const locations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Find a location near you!</div>
      <div className={styles.location}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.textHead}>Albion Bobe's Pizza</div>
            <div className={styles.text}>18 W Main St, Albion, IL 62806</div>

            <div className={styles.text}>
              <Link href="https://g.page/r/CQDCRuGXKDTbEAo" passHref>
                <p className={styles.link}>See Store Hours</p>
              </Link>
            </div>

            <div className={styles.text}>
              <p>618-442-0044</p>
            </div>
            <div className={styles.links}>
              <Link href="#" passHref>
                <button className={styles.button}>Menu</button>
              </Link>

              <Link
                href="https://www.toasttab.com/bobes-pizza-18-main-street/v3/"
                passHref
              >
                <button className={styles.button}>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map1}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.782280524038!2d-88.0609783846649!3d38.37715777965422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871997da49d97ab%3A0xdb342897e146c200!2sAlbion%20Bobe%E2%80%99s%20Pizza!5e0!3m2!1sen!2sus!4v1652571357258!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.textHead}>Larry Bobe's Pizza</div>
            <div className={styles.text}>
              808 State St, Lawrenceville, IL 62439
            </div>
            <div className={styles.text}>
              <Link href="https://g.page/r/Ca9KyDQZUbWJEAo" passHref>
                <p className={styles.link}>See Store Hours</p>
              </Link>
            </div>
            <div className={styles.text}>
              <p>618-943-2612</p>
            </div>
            <div className={styles.links}>
              <Link href="#" passHref>
                <button className={styles.button}>Menu</button>
              </Link>
              <Link
                href="https://www.toasttab.com/bobes-pizza-lawrenceville/v3/"
                passHref
              >
                <button className={styles.button}>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map2}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.5009392362904!2d-87.6820043846546!3d38.729265479596876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887204bddedf11a1%3A0x89b5511934c84aaf!2sLarry%20Bobe&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1652575255268!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.textHead}>Bobe's Pizza</div>
            <div className={styles.text}>620 W 9th St, Mt Carmel, IL 62863</div>
            <div className={styles.text}>
              <Link href="https://g.page/r/CQ-sNc3EfTEcEAo" passHref>
                <p className={styles.link}>See Store Hours</p>
              </Link>
            </div>
            <div className={styles.text}>
              <p>618-450-2623</p>
            </div>
            <div className={styles.links}>
              <Link href="#" passHref>
                <button className={styles.button}>Menu</button>
              </Link>

              <Link
                href="https://www.toasttab.com/bobes-pizza-mt-carmel/v3/"
                passHref
              >
                <button className={styles.button}>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map3}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.22797950526!2d-87.77511398466385!3d38.413095979648325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871ee836f2fd4b1%3A0x1c317dc4cd35ac0f!2sBobe&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1652576477321!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.textHead}>Bobe's Pizza</div>
            <div className={styles.text}>1610 E Main St, Olney, IL 62450</div>
            <div className={styles.text}>
              <Link href="https://g.page/r/CVfnpfsKYXs5EAo" passHref>
                <p className={styles.link}>See Store Hours</p>
              </Link>
            </div>
            <div className={styles.text}>
              <p>618-392-0553</p>
            </div>
            <div className={styles.links}>
              <Link href="#" passHref>
                <button className={styles.button}>Menu</button>
              </Link>
              <Link
                href="https://www.toasttab.com/bobes-pizza-olney/v3/"
                passHref
              >
                <button className={styles.button}>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.3846037420362!2d-88.07115518465453!3d38.7319356795966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88722eaf82fce20b%3A0x397b610afba5e757!2sBobe&#39;s%20Pizza!5e0!3m2!1sen!2sus!4v1652577097963!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.left}>
          <div className={styles.info}>
            <div className={styles.textHead}>Byron Bobe's Pizza House</div>
            <div className={styles.text}>812 Main St, Vincennes, IN 47591</div>
            <div className={styles.text}>
              <Link href="https://g.page/r/CbEgc9Vxg5VbEAo" passHref>
                <a className={styles.link}>See Store Hours</a>
              </Link>
            </div>
            <div className={styles.text}>
              <p>812-882-4546</p>
            </div>
            <div className={styles.links}>
              <Link href="#" passHref>
                <button className={styles.button}>Menu</button>
              </Link>
              <Link
                href="https://www.toasttab.com/bobes-pizza-main-st-812-main-st/v3/"
                passHref
              >
                <button className={styles.button}>Order Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.map}>
            <div className={styles.map5}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.8650321551318!2d-87.52937128465615!3d38.674969779605625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886dff70d90ad77d%3A0x5b958371d57320b1!2sByron%20Bobe&#39;s%20Pizza%20House!5e0!3m2!1sen!2sus!4v1652577988467!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default locations;
