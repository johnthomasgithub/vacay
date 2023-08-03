import React, { useEffect } from "react";
import "./Trips.scss";
import { useSelector } from "react-redux";
import Tripsbg from "../../assets/travel-02.jpg";
import Table from "../TripsTable/Table";
const Trips = ({ setShowPopUp }: { setShowPopUp: Function }) => {
  const planner = useSelector((state: any) => state.planner.planArr);

  return (
    <section
      id="trips"
      style={{ backgroundImage: `url(${Tripsbg})` }}
      className="trips__parent"
    >
      <div className="trips__title">Organizing Your Planned Trips</div>
      {/* <button
        onClick={() => {
          setShowPopUp("update");
        }}
      >
        button
      </button> */}
      <div
        className="table"
        style={{ flex: planner.length < 5 ? "unset" : "1" }}
      >
        <Table planner={planner} setShowPopUp={setShowPopUp} />
      </div>
    </section>
  );
};

export default Trips;
