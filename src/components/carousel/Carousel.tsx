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

  const include = (index: number) => {
    const indexLast = cursor + size - 1;
    if (!repeat) {
      if (index >= cursor && index <= indexLast) {
        return true;
      } else {
        return false;
      }
    }

    if (index >= cursor && index <= indexLast) {
      return true;
    }

    // const difference = cursor + size + 1 - props.images.length;
    // if (difference >= 0 && index <= difference) {
    //   return true;
    // }

    return false;
  };

  const items = props.images
    .filter((_, index) => include(index))
    .map((image, index) => (
      <Image key={index} image={image} onClick={props.onImageClick} />
    ));

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

  console.log(`Cursor-Position ${cursor}`)

  return (
    <div className={styles.carousel}>
      <LeftArrow width={"2rem"} onClick={onPrevious} />
      {items}
      <RightArrow width={"2rem"} onClick={onNext} />
    </div>
  );
};
