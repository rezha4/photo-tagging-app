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
      <div style={divStyle} className="bg-red-200" hidden={visibility}>
        <div>
          <button>Waldo</button>
          <button>Wizard</button>
          <button>Wolde</button>
        </div>
        <div>
          <button id="x">X</button>
        </div>
      </div>
      <img
        src={image}
        alt=" "
        onClick={(e) => {
          setXCoordinate(e.clientX);
          setYCoordinate(e.clientY);
          if (visibility === false) {
            setVisibilty(true);
          }
          setVisibilty(false);
          console.log(e.clientX);
          console.log(e.clientY);
        }}
      />
    </>
  );
}

export default Image;
