import React, { useState } from "react";
import styles from "./App.module.scss";
import { Carousel } from "./components/carousel/Carousel";
import { IImage } from "./model/IImage";

export const App: React.FC = () => {
  const [images] = useState<IImage[]>([
    { content: "1" },
    { content: "2" },
    { content: "3" },
    { content: "4" },
    // { content: "5" },
    // { content: "6" },
  ]);
  return (
    <div className={styles.app}>
      <Carousel images={images} />
    </div>
  );
};
