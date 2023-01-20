import React from 'react';
import CardContent from './CardContent';
import { friends } from './shared/imageImport';
const Content = () => {
  console.log({ friends });
  return (
    <div
      id="cards"
      className=" flex min-h-[100%] w-[100%] flex-col items-center justify-center gap-4"
    >
      {Object.entries(friends).map((src, index) => {
        return <CardContent key={index} name={src[0]} imgSrc={src[1].image} content={src[1].content} />;
      })}
    </div>
  );
};

export default Content;
