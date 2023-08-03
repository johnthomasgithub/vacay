import React, { useEffect } from "react";
import "./Trips.scss";
import { useSelector } from "react-redux";
import Tripsbg from "../../assets/travel-02.jpg";
import Table from "../TripsTable/Table";

interface Props {
  setShowPopUp: Function;
}
const Trips = (props: Props) => {
  const planner = useSelector((state: any) => state.planner.planArr);

  return (
    <section
      id="trips"
      style={{ backgroundImage: `url(${Tripsbg})` }}
      className="trips__parent"
    >
      <div className="trips__title">Organizing Your Planned Trips</div>
      <div
        className="table"
        style={{ flex: planner.length < 5 ? "unset" : "1" }}
      >
        <Table planner={planner} setShowPopUp={props.setShowPopUp} />
      </div>
    </section>
  );
};

export default Trips;
