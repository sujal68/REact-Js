import { useState } from "react";
import Location from "./Location";

export default function Timer() {
  const [num, setNum] = useState(0);

  function increament() {
    setNum(num + 1)
  }
  function decreament() {
    if (num <= 0) {
      return false;
    }
    setNum(num - 1)
  }

  return <>
    <center>
      <h1>Timer</h1>
      <button onClick={decreament}>▬</button>
      <h2 style={{ display: 'inline-block', margin: "20px" }}>{num}</h2 >
      <button onClick={increament}>✚</button>
    </center>

    <Location city="surat" state="Gujarat" country="India" planet="Earth" galaxy="Milkyway Galaxy" num={num}></Location>
  </>
}