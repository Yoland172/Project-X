import classNames from "classnames";
import styles from "./themeSwitcher.module.scss";
import IconSun from "../icon/iconSun";
import IconMoon from "../icon/iconMoon";

interface ThemeSwitcherProps {
  theme: string;
  updateTheme: (themeMode: string) => void;
}

const ThemeSwitcher = ({ theme, updateTheme }: ThemeSwitcherProps) => {
  return (
    <div className={styles.main}>
      <IconSun width={20} height={20} className={theme && styles.activeSun} />
      <button
        data-testid="themeElement"
        className={classNames(styles.dotContainer, theme && styles[theme])}
        onClick={() => updateTheme(theme ? "" : "light")}
      >
        <span className={classNames(styles.dot, theme && styles[theme])} />
      </button>
      <IconMoon
        width={20}
        height={20}
        className={!theme ? styles.activeMoon : ""}
      />
    </div>
  );
};

export default ThemeSwitcher;
