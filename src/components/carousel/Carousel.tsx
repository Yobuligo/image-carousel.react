import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { Image } from "../image/Image";
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const [cursor, setCursor] = useState(0);

  const repeat = props.repeat ?? false;

  const size = props.size ?? 1;

  const items = props.images
    .filter((_, index) => {
      return index >= cursor && index <= cursor + size - 1;
    })
    .map((image, index) => <Image key={index} image={image} />);

  const onNext = () => {
    setCursor((previous) => {
      // contains only one item?
      if (props.images.length === 1) {
        return previous;
      }

      // At the end?
      if (previous === props.images.length - size) {
        if (repeat) {
          // Navigate to first
          return 0;
        } else {
          // Hold position
          return previous;
        }
      }

      return previous + 1;
    });
  };

  const onPrevious = () => {
    setCursor((previous) => {
      // contains only one item?
      if (props.images.length === 1) {
        return previous;
      }

      // At the beginning?
      if (previous === 0) {
        if (repeat) {
          // Navigate to last
          return props.images.length - 1;
        } else {
          // Hold position
          return previous;
        }
      }

      return previous - 1;
    });
  };

  return (
    <div className={styles.carousel}>
      <LeftArrow width={"2rem"} onClick={onPrevious} />
      {items}
      <RightArrow width={"2rem"} onClick={onNext} />
    </div>
  );
};
