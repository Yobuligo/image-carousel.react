import { IImageProps } from "./IImageProps";
import styles from "./Image.module.scss";

export const Image: React.FC<IImageProps> = (props) => {
  const onClick = () => {
    props.onClick?.(props.image);
  };

  return (
    <div className={styles.image} onClick={onClick}>
      {props.image.content}
    </div>
  );
};
