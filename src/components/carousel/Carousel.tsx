import { Image } from "../image/Image";
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const items = props.images.map((image) => <Image image={image} />);
  return <div className={styles.carousel}>{items}</div>;
};
