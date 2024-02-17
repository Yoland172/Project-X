import classNames from "classnames";
import styles from "./themeSwitcher.module.scss";
import IconSun from "../icon/iconSun";
import IconMoon from "../icon/iconMoon";

interface ThemeSwitcherProp {
  theme: string;
  setTheme: (themeMode: string) => void;
}

const ThemeSwitcher = ({ theme, setTheme }: ThemeSwitcherProp) => {
  return (
    <div className={styles.main}>
      <IconSun width={20} height={20} className={theme && styles.activeSun}/>
      <div
        className={classNames(styles.dotContainer, theme && styles[theme])}
        onClick={() => setTheme(theme ? "" : "light")}
      >
        <span className={classNames(styles.dot, theme && styles[theme])} />
      </div>
      <IconMoon width={20} height={20} className={!theme ? styles.activeMoon : ""}/>
    </div>
  );
};

export default ThemeSwitcher;
