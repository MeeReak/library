import React from "react";
import Card from "./card";
import { staticInfo } from "@/utils/const";

export const DisplayCard = () => {
  return (
    <>
      <div className="flex gap-5 mt-5 ml-10">
        {staticInfo.map((item, index) => (
          <Card
            key={index}
            text={item.text}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
    </>
  );
};
