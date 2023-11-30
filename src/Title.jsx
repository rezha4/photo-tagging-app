import wally from "./assets/wally.jpeg";
import wilma from "./assets/wilma.png";
import odlaw from "./assets/odlaw.png";

export default function Title() {
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
          <p>Time:</p>
        </div>
      </div>
    </>
  );
}
