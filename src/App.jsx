import { useState } from "react";
import "./App.css";
import DisplayDifficulty from "./DisplayDifficulty";
import MenuList from "./Menulist";

function App() {
  const [level, setLevel] = useState("");
  return (
    <>
      <div className="">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Choose your React Coures difficulty
        </h1>
        <div className="container2">
          <MenuList setLevel={setLevel} />
          <DisplayDifficulty level={level} />
        </div>
      </div>
    </>
  );
}

export default App;
