import styles from "./skeleton.module.scss";
interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton = (styleProps: SkeletonProps) => <div style={styleProps} className={styles.skeleton} />;

export default Skeleton;
