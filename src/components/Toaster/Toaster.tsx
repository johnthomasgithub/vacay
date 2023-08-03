import React, { useState, useEffect } from "react";
import "./Toaster.scss";
import { useSelector } from "react-redux";

const Toaster = ({ message }: { message: any }) => {
  const toaster: any = useSelector((state: any) => state.toaster.showToaster);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (toaster != null) {
      setIsVisible(true);
      var timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [toaster]);

  return (
    <div className={`toaster ${isVisible && toaster != null ? "show" : ""}`}>
      {toaster}
    </div>
  );
};

export default Toaster;
