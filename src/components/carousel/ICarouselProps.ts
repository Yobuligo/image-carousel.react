import { IImage } from "../../model/IImage";

export interface ICarouselProps {
  images: IImage[];

  /**
   * Returns if the carousel start from the beginning, if it reached the end.
   */
  repeat?: boolean;

  /**
   * Returns the number of elements, which should be displayed in the carousel.
   */
  size?: number;
}
