import image from "./assets/waldo.jpg";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import WinnerForm from "./WinnerForm";

function Image() {
  const [visibility, setVisibility] = useState(true);
  const [answerCoordinate, setAnswerCoordinate] = useState({ x: 0, y: 0 });
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  const answerBoxStyle = {
    position: "absolute",
    left: `${answerCoordinate.x}px`,
    top: `${answerCoordinate.y}px`,
  };

  async function checkGameOver() {
    try {
      const game = await axios.get("http://localhost:3000/game-completed");
      if (game.data.completed) {
        alert("Game over");
        setGameOver(true);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    {gameOver && <WinnerForm />}
      <div style={answerBoxStyle} className="w-10" hidden={visibility}>
        <div>
          <p className="bg-white hover:bg-gray-100 border w-20 m-1 shadow-2xl text-xs text-center">
            Who's this?
          </p>
          <button
            className="bg-white hover:bg-gray-100 border shadow-2xl w-20 m-1"
            onClick={async () => {
              setVisibility(true);
              if (
                axis.x >= 41 &&
                axis.x <= 44 &&
                axis.y >= 16 &&
                axis.y <= 21
              ) {
                try {
                  const response = await axios.post(
                    "http://localhost:3000/answers",
                    {
                      answer: "WALDO",
                    }
                  );
                  console.log(response);
                } catch (err) {
                  console.error("Error:", err);
                }
              }
              checkGameOver();
            }}
          >
            Waldo
          </button>
          <button
            className="bg-white hover:bg-gray-100 border shadow-2xl w-20 m-1"
            onClick={async () => {
              setVisibility(true);
              if (
                axis.x >= 19 &&
                axis.x <= 20 &&
                axis.y >= 71 &&
                axis.y <= 76
              ) {
                try {
                  const response = await axios.post(
                    "http://localhost:3000/answers",
                    {
                      answer: "ODLAW",
                    }
                  );
                  console.log(response);
                } catch (err) {
                  console.error("Error:", err);
                }
              }
              checkGameOver();
            }}
          >
            Odlaw
          </button>
          <button
            className="bg-white hover:bg-gray-100 border shadow-2xl w-20 m-1"
            onClick={async () => {
              setVisibility(true);
              if (
                axis.x >= 29 &&
                axis.x <= 30 &&
                axis.y >= 72 &&
                axis.y <= 77
              ) {
                try {
                  const response = await axios.post(
                    "http://localhost:3000/answers",
                    {
                      answer: "WILMA",
                    }
                  );
                  console.log(response);
                } catch (err) {
                  console.error("Error:", err);
                }
              }
              checkGameOver();
            }}
          >
            Wilma
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
          //show/hide on image click
          visibility ? setVisibility(false) : setVisibility(true);

          //show answer box beneath cursor
          const newCoordinate = { ...answerCoordinate };
          newCoordinate.x = e.clientX - 50;
          newCoordinate.y = e.clientY;
          setAnswerCoordinate(newCoordinate);

          //get normalized answer (percentage)
          const rect = e.currentTarget.getBoundingClientRect(); // Get the dimensions of the container
          const containerWidth = rect.width;
          const containerHeight = rect.height;

          const x = Math.round(
            ((e.clientX - rect.left) / containerWidth) * 100
          );
          const y = Math.round(
            ((e.clientY - rect.top) / containerHeight) * 100
          );

          const newAxis = { ...axis };
          newAxis.x = x;
          newAxis.y = y;
          setAxis(newAxis);

          //for catching the coordinates to set win condition
          //console.log(`X:${axis.x}, Y:${axis.y}`);
          // console.log(answers);
        }}
      />
    </>
  );
}

export default Image;
