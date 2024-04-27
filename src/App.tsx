import React, { useState } from "react";
import "./App.css";
import { Carousel } from "./components/carousel/Carousel";
import { IImage } from "./model/IImage";

export const App: React.FC = () => {
  const [images] = useState<IImage[]>([
    { content: "first" },
    { content: "second" },
    { content: "third" },
  ]);
  return <Carousel images={images} />;
};
