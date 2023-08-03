import React, { useState, useEffect } from "react";
import "./Toaster.scss";
import { useSelector } from "react-redux";
var timer: any;
const Toaster = () => {
  const toaster: any = useSelector((state: any) => state.toaster.showToaster);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (toaster != null) {
      clearTimeout(timer);
      setIsVisible(true);
      timer = setTimeout(() => {
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
