import axios from "axios";
import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    async function fetchLeaderBoard() {
      try {
        const response = await fetch("http://localhost:3000/leaderboard");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLeaderBoardData(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    }

    fetchLeaderBoard();
  }, []);
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderBoardData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.time}
          </li>
          // Render the data as needed; here assuming 'name' and 'time' are fields in the fetched data
        ))}
      </ul>
    </div>
  );
}
