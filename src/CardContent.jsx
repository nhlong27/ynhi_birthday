import React, { useState } from 'react';

const CardContent = ({key, content, name, imgSrc}) => {
  const [cardState, setCardState] = useState(true);
  const infoStyle = cardState ? 'w-[70%] p-4 ml-4' : 'w-[0%]';
  const imgStyle = cardState ? 'w-[30%]' : 'w-[100%]';
  const cardStyle = cardState? 'w-[100%]': 'lg:w-[30%] w-[60%]'
  return (
    <div
    key={key}
      // onClick={(e) => {
      //   e.stopPropagation();
      //   setCardState((state) => !state);
      // }}
      className={`ring-offset-[rgb(233, 200, 234)] min-h-[10rem] w-[37rem] overflow-hidden rounded-lg bg-yellow-500 bg-opacity-70 ring-4 ring-orange-800 ring-offset-2 transition-all duration-500`}
    >
      <div className="card-content flex">
        <div className={`card-image h-[100%] ${imgStyle} transition-all duration-1000`}>
          <img src={imgSrc} alt="logo" />
        </div>
        <div className={`${infoStyle} card-info   overflow-hidden`}>
          <div className={` card-info-title `}>
            <h3 className="mb-4 text-[1.8rem] tracking-wider">{name}</h3>
            <h4 className="text-[1.2rem]">
              {content}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
