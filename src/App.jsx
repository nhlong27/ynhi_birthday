import React from 'react';
import LeftSlide from './LeftSlide';
import MiddleHutao from './MiddleHutao';
import RightFriends from './RightFriends';

const App = () => {
  return <div className='flex absolute top-0 left-0 h-screen w-screen'>
    <LeftSlide />
    <MiddleHutao />
    <RightFriends />
  </div>;
};

export default App;
