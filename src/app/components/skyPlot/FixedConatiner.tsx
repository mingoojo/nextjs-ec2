//@ts-nocheck
import React, { CSSProperties, ReactNode, useEffect, useState } from "react";

interface FixedConatinerProps {
    children: ReactNode;
}

const containerStyle: CSSProperties = {
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`,
  background: "#FFFFFF",
  position: "fixed",
};

const FixedConatiner = ({ children }: FixedConatinerProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const documentHeight = document.documentElement.clientHeight;
      setWidth(window.innerWidth);
      setHeight(documentHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //return <div style={containerStyle}>{children}</div>;
  return <div style={{
    width: "100%",
    height: `${height}px`,
    background: "#FFFFFF",
    overflow: "hidden",
    touchAction: "none",
  }}>{children}
  </div>;
};
export default FixedConatiner;
