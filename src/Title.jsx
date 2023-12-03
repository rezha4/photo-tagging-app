import wally from "./assets/wally.jpeg";
import wilma from "./assets/wilma.png";
import odlaw from "./assets/odlaw.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Title() {
  const [time, setTime] = useState(0);

  async function getTime() {
    try {
      const res = await axios.get("http://localhost:3000/time");
      setTime(res.data.time);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const timeInterval = setInterval(getTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

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
        <div className="text-center mb-5">
          <p>Time: {time}</p>
        </div>
      </div>
    </>
  );
}
