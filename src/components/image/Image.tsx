import { IImageProps } from "./IImageProps";
import styles from "./Image.module.scss";

export const Image: React.FC<IImageProps> = (props) => {
  return <div className={styles.image}>{props.image.content}</div>;
};
