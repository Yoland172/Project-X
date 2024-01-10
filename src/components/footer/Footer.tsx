import styles from "./footer.module.scss";
import transitionImg from "../../assets/img/layered-waves-haikei (2).png";
import FacebookIcon from "../../assets/icon/socialMedia/FacebookIcon";
import InstagramIcon from "../../assets/icon/socialMedia/InstagramIcon";
import TwitterIcon from "../../assets/icon/socialMedia/TwitterIcon";
import TelegramIcon from "../../assets/icon/socialMedia/TelegramIcon";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <img src={transitionImg} alt="transitionImage" />
        <div className={styles.mainContainer}>
          <div className={styles.bigText}>
            <h1>ENJOY IT!</h1>
          </div>
          <div className={styles.titlesContainer}>
            <div className={styles.section}>
              <h1>Legal</h1>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
            <div className={styles.section}>
              <h1>Explore</h1>
              <p>Home</p>
              <p>About</p>
              <p>Careers</p>
            </div>
            <div className={styles.section}>
              <h1>Get in touch</h1>
              <h3>workMail@gmail.com</h3>
              <h3>949 735 4092</h3>
            </div>
            <div className={styles.section}>
              <h1>Partners</h1>
              <p>IMDB</p>
              <p>Metarcritic</p>
              <p>Rotten Tomatoes</p>
            </div>
          </div>
          <div className={styles.socialsContainer}>
            <h1>Socials</h1>
            <div className={styles.socialsIconsContainer}>
              <FacebookIcon width={30} height={30} />
              <InstagramIcon width={30} height={30} />
              <TwitterIcon width={30} height={30} />
              <TelegramIcon width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
