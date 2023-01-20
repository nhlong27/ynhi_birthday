import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { audioList } from './shared/audioImport';
import { ImNext2, ImBackward2 } from 'react-icons/im';
import { AiOutlinePause } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';

const Player = () => {
  const [trackNumber, setTrackNumber] = useState(0);
  const tracks = Object.entries(audioList);
  const [isPlaying, setIsPlaying] = useState(true);
  console.log({trackNumber})
  return (
    <div className="absolute -top-6 -left-[6rem] flex h-[1.5rem] w-[25rem]  rounded-2xl overflow-hidden px-4 text-[16px] normal-case text-cyan-600 ring-2 ring-black bg-pink-100">
      <span className="font-extrabold italic text-black">
        {' '}
        <span className="tracking-wider  text-black">
          {isPlaying ? 'Now playing...' : 'Paused - '}
        </span>{' '}
        {tracks[trackNumber][0]}
      </span>
      <ReactPlayer
        onEnded={() => setTrackNumber((prev) => prev + 1)}
        width={0}
        height={0}
        playing={isPlaying}
        controls={true}
        url={tracks[trackNumber][1]}
      />
      <div className="ml-auto flex gap-4">
        <button
          onClick={() => {
            if (trackNumber === 0) setTrackNumber(7);
            else setTrackNumber((prev) => prev - 1);
          }}
        >
          <ImBackward2 />
        </button>
        <button
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          {isPlaying ? <AiOutlinePause /> : <BsFillPlayFill />}
        </button>
        <button
          onClick={() => {
            if (trackNumber === 7) setTrackNumber(0);
            else setTrackNumber((prev) => prev + 1);
          }}
        >
          <ImNext2 />
        </button>
      </div>
    </div>
  );
};

export default Player;
