import image from "./assets/waldo.jpg";
import "./index.css";
import { useState } from "react";

function Image() {
  const [visibility, setVisibilty] = useState(true);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const divStyle = {
    position: "absolute",
    left: `${xCoordinate}px`,
    top: `${yCoordinate}px`,
  };
  return (
    <>
      <div style={divStyle} className="w-10" hidden={visibility}>
        <div>
          <button className="bg-blue-500 hover:bg-blue-400 w-20 m-1">
            Waldo
          </button>
          <button className="bg-blue-500 hover:bg-blue-400 w-20 m-1">
            Wizard
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 w-20 m-1"
            onClick={() => {
              console.log("Wolde");
            }}
          >
            Wolde
          </button>
          <button
            className="bg-red-500 hover:bg-red-400 w-20 m-1"
            onClick={() => {
              setVisibilty(true);
            }}
          >
            Close
          </button>
        </div>
      </div>
      <img
        src={image}
        alt=" "
        onClick={(e) => {
          setXCoordinate(e.clientX - 50);
          setYCoordinate(e.clientY);
          visibility ? setVisibilty(false) : setVisibilty(true);
        }}
      />
    </>
  );
}

export default Image;
