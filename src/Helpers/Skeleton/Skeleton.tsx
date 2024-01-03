import styles from "./skeleton.module.scss";

interface SkeletonProps {
    width: string,
    height:string,
    borderRadius:string
}

const Skeleton = (styleProps:SkeletonProps) => {
    
    return (
        <div style={styleProps}  className={styles.skeleton}>

        </div>
    )
}

export default Skeleton;