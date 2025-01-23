import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import "./App.css";
import { Calendar } from "@/components/ui/calendar";
import { NavbarWithMegaMenu } from "./components/ui/NavBar";
function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = React.useState(new Date());

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <nav className="navbar">
        <NavbarWithMegaMenu />
      </nav>
      <main>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-200"
        />
      </main>
      <div className="button hover:animate-bounce">
        <Button
          className="transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
          onClick={handleCount}
        >
          Count is {count}{" "}
        </Button>
      </div>
    </>
  );
}

export default App;
{
  /* <>
      <nav className="navbar">
        <NavbarWithMegaMenu />
      </nav>
      <main>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </main>
      <br />
      <div>
        <button onClick={handleCount}>Count is {count} </button>
      </div>
    </> */
}
