import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./DatePicker.scss";
import { formatDateToDDMMYYYY } from "../../utils/formatDate";
const DatePickerComponent = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  startDate: any;
  setStartDate: any;
  endDate: any;
  setEndDate: any;
}) => {
  return (
    <div className="date-picker-parent">
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start date"
      />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End date"
      />
    </div>
  );
};

export default DatePickerComponent;
