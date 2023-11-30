import image from "./assets/waldo.jpg";
import "./index.css";
import { useState } from "react";

function Image() {
  const [visibility, setVisibility] = useState(true);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const divStyle = {
    position: "absolute",
    left: `${xCoordinate}px`,
    top: `${yCoordinate}px`,
  };
  return (
    <>
      <div style={divStyle} className="w-10" hidden={visibility}>
        <div>
          <p className="bg-blue-500 hover:bg-blue-400 w-20 m-1 text-xs text-center">
            Who's this?
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-400 w-20 m-1"
            onClick={() => {
              if (axis.x > 22 && axis.x < 25 && axis.y > 8 && axis.y < 14) {
                console.log("correct");
              }
              setVisibility(true);
            }}
          >
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
          {/* <button
            className="bg-red-500 hover:bg-red-400 w-20 m-1"
            onClick={() => {
              setVisibilty(true);
            }}
          >
            Close
          </button> */}
        </div>
      </div>
      <img
        src={image}
        alt=" "
        className="m-auto w-auto h-[500px] max-w-[800px]"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect(); // Get the dimensions of the container
          const containerWidth = rect.width;
          const containerHeight = rect.height;

          setXCoordinate(e.clientX - 50);
          setYCoordinate(e.clientY);
          visibility ? setVisibility(false) : setVisibility(true);

          const percentX = Math.round(
            ((e.clientX - rect.left) / containerWidth) * 100
          );
          const percentY = Math.round(
            ((e.clientY - rect.top) / containerHeight) * 100
          );

          const newAxis = { ...axis };
          newAxis.x = percentX;
          newAxis.y = percentY;
          setAxis(newAxis);
          console.log(`percentX: ${axis.x} percentY: ${axis.y}`);
        }}
      />
    </>
  );
}

export default Image;
