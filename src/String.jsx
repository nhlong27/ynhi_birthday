import React, { useState } from 'react';
import { BsMusicNote } from 'react-icons/bs';
import { nhi_album } from './shared/imageImport';

const String = (props) => {
  const [isSlide, setIsSlide] = useState(false);
  const slideStyle = isSlide ? 'opacity-100 index-10' : 'opacity-0';
  const { role } = props;
  console.log(nhi_album);
  return (
    <div onMouseEnter={() => setIsSlide(true)} onMouseLeave={() => setIsSlide(false)}>
      <span className="transition-full absolute ml-4 mt-2 flex flex-col duration-500 hover:mt-4">
        <BsMusicNote size={20} />
      </span>
      <div className="group h-[25%]">
        <StringSegments {...props} />
      </div>
      <div className="group h-[35%]">
        <StringSegments {...props} />
      </div>
      <div className="group h-[40%]">
        <StringSegments {...props} />
      </div>
      <div
        className={`${slideStyle} absolute top-[28%] h-[15rem] w-[15rem] ring-2 ring-black ring-offset-4 ring-offset-white overflow-hidden rounded-lg transition-all duration-500`}
      >
        <img src={nhi_album[role]} className="h-[100%] w-[100%]" alt="nhi_image" />
      </div>
    </div>
  );
};
const StringSegments = (props) => {
  const { style } = props;
  return (
    <>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-l-4`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-r-4 group-hover:border-l-0`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-l-4`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-r-4 group-hover:border-l-0`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-l-4`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-r-4 group-hover:border-l-0`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-l-4`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-r-4 group-hover:border-l-0`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-l-4`}
      ></div>
      <div
        className={`h-[10%] border-l-8 ${style} group-hover:rounded-xl group-hover:border-r-4 group-hover:border-l-0`}
      ></div>
    </>
  );
};

export default String;
