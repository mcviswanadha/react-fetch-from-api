import React, { useState, useEffect } from "react";
import "./style.css";

const useFetch = url => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
  }, []);

  return { data };
};

export default function App() {
  const [count, setCount] = useState(0);
  const {data} = useFetch("https://api.randomuser.me/");

  return (
    <div>
      <p>your clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click Me</button>
      {data && <div>{data.name.first}</div>}
    </div>
  );
}
