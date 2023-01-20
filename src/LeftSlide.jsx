import React, { useState } from 'react';
import String from './String';
import ReactPlayer from 'react-player';
import Player from './Player';
import hutaoGif from '../public/assets/album/hutao.gif';

const LeftSlide = () => {
  return (
    <div
      id="left-side"
      className="flex h-screen basis-[30%] items-center justify-center shadow-2xl"
    >
      <div
        id="round-hole"
        className="absolute top-[25%] h-[20rem] w-[20rem] overflow-hidden rounded-full bg-gradient-to-r from-black to-gray-800 ring-4 ring-black"
      ></div>
      <div id="strings" className="absolute top-8 flex h-screen gap-8">
        <Player />
        <String style="border-orange-900 group-hover:border-orange-700" role={0} />
        <String style="border-orange-800 group-hover:border-orange-600" role={1} />
        <String
          style="border-orange-700 group-hover:border-orange-500 border-l-4"
          role={2}
        />
        <String style="border-gray-700 group-hover:border-gray-500 border-l-4" role={3} />
        <String style="border-gray-500 group-hover:border-gray-400 border-l-4" role={4} />
        <String
          style="border-gray-400  group-hover:border-gray-300 border-l-4"
          role={5}
        />
      </div>
      <div className="absolute bottom-0 left-[24rem] ring-2 ring-black">
        <img src={hutaoGif} alt="this slowpoke moves" width="200" />
      </div>
    </div>
  );
};

export default LeftSlide;
