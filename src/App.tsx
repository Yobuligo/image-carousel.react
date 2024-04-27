import React, { useState } from "react";
import styles from "./App.module.scss";
import { Carousel } from "./components/carousel/Carousel";
import { IImage } from "./model/IImage";

export const App: React.FC = () => {
  const [images] = useState<IImage[]>([
    { content: "first" },
    { content: "second" },
    { content: "third" },
  ]);
  return (
    <div className={styles.app}>
      <Carousel images={images} />;
    </div>
  );
};
