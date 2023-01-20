import React from 'react';
import { japanesePhrases } from './shared/japanese';
const MiddleHutao = () => {
  return (
    <div id="hutao" className="text-cyan-300 text-bold text-[30px] basis-[30%] px-4">
      <div className="relative top-4 h-[7%] w-[100%] flex">
        {japanesePhrases['happy birthday'].map((letter, index)=>{
          return <div className='flex justify-center items-center flex-grow'>{letter}</div>
        })}
      </div>
      <div className='absolute bottom-4 tracking-[1.5rem] left-[40%] h-[7%] flex justify-center items-center'>Yen Nhi</div>
    </div>
  );
};

export default MiddleHutao;
