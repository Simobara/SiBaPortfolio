import React from 'react';

const AppBorder = ({ bgprimary }) => {
  return (
    <div>
      <div className="flex pt-5 gap-0 flex-row items-baseline justify-center">
      <div className={`${bgprimary ? 'bg-[#bac0ce]' : 'bg-[#3f4551]'} w-[50px] h-[2px]`}></div>
        <div className={`${bgprimary ? 'bg-primary' : 'bg-aqua'} w-[60px] h-[2px]`}></div>
        <div className={`${bgprimary ? 'bg-[#bac0ce]' : 'bg-[#3f4551]'} w-[50px] h-[2px]`}></div>
      </div>
    </div>
  );
};

export default AppBorder;
