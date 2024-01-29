import React, { ReactNode } from "react";
import FixedConatiner from "./FixedConatiner";


//todo: home도 적용 필요 -> 일단 보류
interface navigatorContainerProps {
    children: ReactNode;
    onLeftMenuSelect: (selected:string) => void;
    mountPoint: string;
}

const NavigatorContainer = ({ children, onLeftMenuSelect, mountPoint }:navigatorContainerProps) => {

  const onSelectMountPoint = (selected:string) => {
    onLeftMenuSelect(selected);
  }

  console.log(mountPoint)

  return <FixedConatiner>
    <div className='right-part-wrapper'>
      <div className='content-wrapper'>
        {children}
      </div>
    </div>
  </FixedConatiner>
}
export default NavigatorContainer;