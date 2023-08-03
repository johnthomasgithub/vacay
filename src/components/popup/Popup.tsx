import React, { useEffect, useState } from "react";
import "./Popup.scss";
import DatePickerComponent from "../datepicker/DatePicker";
import Heading from "../Heading/Heading";
import close from "../../assets/close-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { addPlan, updatePlan } from "../../features/plan/PlanSlice";
import { formatDateToDDMMYYYY, stringToDate } from "../../utils/formatDate";
import { showToaster } from "../../features/toaster/toasterSlice";
const Popup = ({
  setShowPopUp,
  popConfig,
}: {
  setShowPopUp: Function;
  popConfig: any;
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [designation, setDesignation] = useState("");
  const [startDate, setStartDate]: any = useState(null);
  const [endDate, setEndDate]: any = useState(null);
  const planner: any = useSelector((state: any) => state.planner.planArr);

  useEffect(() => {
    console.log(planner);
  }, [planner]);

  useEffect(() => {
    if (popConfig.purpose === "Update") {
      let data = planner.find((ele: any) => ele.id === popConfig.id);
      setTitle(data.title);
      setDesc(data.description);
      setDesignation(data.designation);
      setEndDate(stringToDate(data.toDate));
      setStartDate(stringToDate(data.fromDate));
    }
  }, [popConfig]);

  const dispatch = useDispatch();

  const updatePlannerArray = (newObj: any, id: any) => {
    let ans = planner.map((item: any) =>
      item.id === id ? { ...newObj, id } : item
    );
    return ans;
  };

  const handleAddUpdate = (identifier: string) => {
    if (identifier === "add") {
      dispatch(
        addPlan({
          id: "",
          title: title,
          fromDate: formatDateToDDMMYYYY(startDate),
          toDate: formatDateToDDMMYYYY(endDate),
          designation: designation,
          description: desc,
        })
      );

      dispatch(showToaster("Added Successfully !"));
      setTimeout(() => {
        dispatch(showToaster(null));
      }, 3000);
    }
    if (identifier === "update") {
      let updatedArray = updatePlannerArray(
        {
          id: popConfig.id,
          fromDate: formatDateToDDMMYYYY(startDate),
          toDate: formatDateToDDMMYYYY(endDate),
          designation: designation,
          description: desc,
          title: title,
        },
        popConfig.id
      );
      console.log(updatedArray);
      dispatch(updatePlan(updatedArray));
      dispatch(showToaster("Updated Successfully !"));
      setTimeout(() => {
        dispatch(showToaster(null));
      }, 3000);
    }
    setShowPopUp(false);
  };

  return (
    <div className="popup">
      <div className="pop__inner">
        <img
          className="close-icon"
          src={close}
          onClick={() => setShowPopUp(false)}
        ></img>
        <Heading value={popConfig.heading} head={true} />
        <Heading value="Title" />
        <div className="title">
          <input
            value={title}
            onChange={(ev: any) => setTitle(ev.target.value)}
          />
        </div>
        <Heading value="Designation" />
        <div className="designation">
          <input
            value={designation}
            onChange={(ev: any) => setDesignation(ev.target.value)}
          />
        </div>
        <Heading value="Select Dates" />
        <DatePickerComponent
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <Heading value="Description" />
        <div className="description">
          <textarea
            value={desc}
            onChange={(ev: any) => setDesc(ev.target.value)}
          />
        </div>
        <button
          style={
            designation &&
            designation.length > 0 &&
            startDate &&
            endDate &&
            title.length > 0 &&
            desc.length > 0
              ? {}
              : { opacity: "0.3", pointerEvents: "none" }
          }
          className="add__btn"
          onClick={() =>
            handleAddUpdate(popConfig.purpose === "Update" ? "update" : "add")
          }
        >
          {popConfig.button}
        </button>
      </div>
    </div>
  );
};

export default Popup;
