import { IImage } from "../../model/IImage";

export interface IImageProps {
  image: IImage;
  onClick?: (image: IImage) => void;
}
