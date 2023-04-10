import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState({
    date: "",
  });

  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setData({
          date: data.data,
        });
      })
    );
  }, []);

  return (
    <div>
      <header>
        <h1>Genetic Algorithms - Phrase Solver</h1>
        <p>{data.date}</p>
      </header>
    </div>
  );
}
