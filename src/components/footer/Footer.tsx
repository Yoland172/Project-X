import styles from "./footer.module.scss";
import transitionImgDarkTheme from "../../assets/img/layered-waves-haikei dark-theme.png";
import transitionImgLightTheme from "../../assets/img/layered-waves-haikei light-theme.png";
import FacebookIcon from "../ui/icon/socialMedia/FacebookIcon";
import InstagramIcon from "../ui/icon/socialMedia/InstagramIcon";
import TwitterIcon from "../ui/icon/socialMedia/TwitterIcon";
import TelegramIcon from "../ui/icon/socialMedia/TelegramIcon";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import ThemeSwitcher from "../ui/themeSwitcher/ThemeSwitcher";

interface FooterProp {
  theme: string;
  setTheme: (theme:string) => void
}

const Footer = ({ theme,setTheme }: FooterProp) => {
  const { t, i18n } = useTranslation();
  const languages = ["ua", "en", "es"];

  return (
    <div className={styles.footerContainer}>
      <img src={theme ? transitionImgLightTheme : transitionImgDarkTheme} alt="transitionImage" />
      <div className={classNames(styles.mainContainer, theme && styles[theme])}>
        <div className={styles.infoContainer}>
          <div className={classNames(styles.bigText, theme && styles[theme])}>
            <h1>{t("footer.enjoyIt")}</h1>
          </div>
          <div className={styles.titlesContainer}>
            <div className={classNames(styles.section, theme && styles[theme])}>
              <h1>{t("footer.columnArticle.legal")}</h1>
              <p>{t("footer.columnAddInfo.terms")}</p>
              <p>{t("footer.columnAddInfo.privacy")}</p>
            </div>
            <div className={classNames(styles.section, theme && styles[theme])}>
              <h1>{t("footer.columnArticle.explore")}</h1>
              <p>{t("footer.columnAddInfo.home")}</p>
              <p>{t("footer.columnAddInfo.about")}</p>
              <p>{t("footer.columnAddInfo.careers")}</p>
            </div>
            <div className={classNames(styles.section, theme && styles[theme])}>
              <h1>{t("footer.columnArticle.getInTouch")}</h1>
              <h3>workMail@gmail.com</h3>
              <h3>949 735 4092</h3>
            </div>
            <div className={classNames(styles.section, theme && styles[theme])}>
              <h1>{t("footer.columnArticle.partners")}</h1>
              <p>IMDB</p>
              <p>Metarcritic</p>
              <p>Rotten Tomatoes</p>
            </div>
          </div>
          <div className={classNames(styles.socialsContainer, theme && styles[theme])}>
            <h1>{t("footer.columnArticle.socials")}</h1>
            <div className={classNames(styles.socialsIconsContainer, theme && styles[theme])}>
              <FacebookIcon width={30} height={30} />
              <InstagramIcon width={30} height={30} />
              <TwitterIcon width={30} height={30} />
              <TelegramIcon width={30} height={30} />
            </div>
          </div>
        </div>
        <div className={classNames(styles.changeLanguageContainer, theme && styles[theme])}>
          <h3>{t("footer.languagePreset.chsLang")}: </h3>
          <ul className={styles.languageList}>
            {languages.map((lang) => (
              <li
                onClick={() => {
                  i18n.changeLanguage(lang);
                  console.log(lang);
                }}
              >
                {t(`footer.languagePreset.${lang}`)}
              </li>
            ))}
          </ul>
        </div>
        <ThemeSwitcher theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  );
};

export default Footer;
