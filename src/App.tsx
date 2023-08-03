import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/popup/Popup";
import { useState } from "react";
import Trips from "./components/Trips/Trips";
import Toaster from "./components/Toaster/Toaster";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popConfig, setPopUpConfig]: any = useState({});
  const navbarLinks = [
    { url: "#main", title: "Home" },
    { url: "#trips", title: "Trips" },
  ];

  const configData = [
    {
      purpose: "Add",
      heading: "Trip Details",
      button: "Add Plan",
    },
    {
      purpose: "Update",
      heading: "Update Details",
      button: "Update Plan",
      id: "",
    },
  ];

  const handleShowPopUp = (identifier: string | boolean, id?: any) => {
    //function to decide the popup's purpose
    if (identifier === "Add") {
      setPopUpConfig(configData[0]);
      setShowPopUp(true);
    } else if (identifier === "update") {
      let con = configData[1];
      con["id"] = id;
      setPopUpConfig(con);
      setShowPopUp(true);
    } else {
      setShowPopUp(false);
    }
  };

  return (
    <div className="App">
      <Toaster />
      {showPopUp && (
        <Popup popConfig={popConfig} setShowPopUp={handleShowPopUp} />
      )}
      <Navbar navbarLinks={navbarLinks} />
      <Main setShowPopUp={handleShowPopUp} />
      <Trips setShowPopUp={handleShowPopUp} />
    </div>
  );
}

export default App;
