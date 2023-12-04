import wally from "./assets/wally.jpeg";
import wilma from "./assets/wilma.png";
import odlaw from "./assets/odlaw.png";
import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";
import { GameContext } from "./Image";

export default function Title() {
  const [time, setTime] = useState(0);
  const { gameStart, handleGameStart, gameOver } = useContext(GameContext);

  useEffect(() => {
    let key;

    if (gameStart) {
      key = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(key);
  }, [gameStart]);

  const handleClick = () => {
    handleGameStart();
    axios.get("http://localhost:3000/start-time");
  };

  return (
    <>
      <div className="text-center mt-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <div>
            <p>Find these characters to win the game</p>
          </div>
          <div className="flex gap-2">
            <p>Waldo: </p>
            <img src={wally} alt=" " className="w-10 h-10" />
            <p>Wilma: </p>
            <img src={wilma} alt=" " className="w-10 h-10" />
            <p>Odlaw: </p>
            <img src={odlaw} alt=" " className="w-10 h-10" />
          </div>
        </div>
        {gameStart && <p>Time: {time}</p>}
        <button
          className="m-2 border border-black py-2 px-5"
          onClick={handleClick}
        >
          Start Game
        </button>
      </div>
    </>
  );
}
