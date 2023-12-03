export default function WinnerForm() {
  return (
    <>
      <form action="/form" method="POST" className="h-auto w-[300px] absolute bg-white p-5">
      <p className="">Please enter a name to be placed on the leaderboard!</p>
        <label htmlFor="name">Name:</label>
        <input type="text" autoFocus/>
        <button type="submit" className="border p-2">Submit!</button>
      </form>
    </>
  );
}
