import { Component, ErrorInfo, ReactNode } from "react";
import styles from "./errorBoundary.module.scss";
import errorImage_dark from "../../assets/img/fatalError_dark.png";
import errorImage_light from "../../assets/img/fatalError_light.png";
import i18next from "i18next";
import classNames from "classnames";

interface Props {
  children?: ReactNode,
  theme:string
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
   public componentDidMount(): void {
   console.log(this.props.theme);   
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={classNames(styles.errorContainer, this.props.theme && styles[this.props.theme])}>
            <img src={this.props.theme === "light" ? errorImage_light : errorImage_dark} alt="errorImage"/>
          <h1> {i18next.t("errorPage.wrongText")}</h1>
          <h3>{i18next.t("errorPage.tryAgain_1")} <span onClick={() => window.location.reload()}>{i18next.t("errorPage.tryAgain_2")}</span></h3>
        </div>
      );
    }
    return this.props.children
  }
}

export default ErrorBoundary;
