import axios from "axios";
import { useState, useContext } from "react";
import { GameContext } from "./Image";

export default function WinnerForm() {
  const [name, setName] = useState("");
  const { gameOver, handleGameOver } = useContext(GameContext);

  const handleSubmit = async (e) => {
    axios.get("http://localhost:3000/end-time");
    handleGameOver();
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/form", { name: name });
      console.log("posted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="h-auto w-[300px] absolute bg-white p-5"
      >
        <p className="">Please enter a name to be placed on the leaderboard!</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          autoFocus
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="border p-2">
          Submit!
        </button>
      </form>
    </>
  );
}
