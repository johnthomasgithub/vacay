import React, { useEffect } from "react";
import Startdate from "../../assets/startdate.svg";
import EndDate from "../../assets/endDate.svg";
import Description from "../../assets/description.svg";
import Location from "../../assets/loc.svg";
import Delete from "../../assets/delete.svg";
import View from "../../assets/view.svg";

import { deletePlan } from "../../features/plan/PlanSlice";
import { useSelector, useDispatch } from "react-redux";
import toggleToaster from "../../utils/toggleToaster";
import { showToaster } from "../../features/toaster/toasterSlice";

const Table = ({
  planner,
  setShowPopUp,
}: {
  planner: object[];
  setShowPopUp: Function;
}) => {
  const dispatch = useDispatch();
  const planArr: any = useSelector((state: any) => state.planner.planArr);
  const handleDelete = (id: any) => {
    let ans = planArr.filter((item: any) => item.id != id);
    dispatch(deletePlan(ans));
    dispatch(showToaster("Deleted Successfully !"));
    setTimeout(() => {
      console.log("called null");
      dispatch(showToaster(null));
    }, 3000);
  };
  return (
    <div className="table__parent">
      {planner.length > 0 ? (
        planner.map((trip: any, index: number) => {
          return (
            <div key={trip.id} className="table_row">
              <div className="row__item">
                <div className="row1">
                  <img src={Startdate}></img> <span>Start</span>
                </div>{" "}
                <div className="val">{trip.fromDate}</div>
              </div>
              <div className="row__item">
                {" "}
                <div className="row1">
                  <img src={EndDate}></img> <span>End</span>
                </div>
                <div className="val">{trip.toDate}</div>
              </div>
              <div className="row__item">
                <div className="row1">
                  <img src={Location}></img> <span>Location</span>
                </div>
                <div className="val"> {trip.designation}</div>
              </div>
              <div className="row__item desc">
                <div className="row1">
                  <img src={Description}></img> <span>Description</span>
                </div>
                <div className="vald"> {trip.description}</div>
              </div>
              <div className="row__item menu">
                Options
                <div className="option_buttons">
                  <img
                    title="View or Update"
                    src={View}
                    onClick={() => {
                      setShowPopUp("update", trip.id);
                    }}
                  ></img>
                  <img
                    className="delete"
                    title="delete"
                    src={Delete}
                    onClick={() => handleDelete(trip.id)}
                  ></img>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="table-error">Sadly, your schedule is empty.</div>
      )}
    </div>
  );
};

export default Table;
