import React, { useEffect, useState } from "react";
import AddData from "./AddData";

const Data = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(11);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataPost(count);
  }, [count]);

  const dataPost = async (count = 1) => {
    try {
      setLoading(true);
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${count}`
      );
      res = await res.json();
      setText(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleAdd = async (word) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: word,
      }),
    });
    res = await res.json();
    setText([...text, res]);
  };
  return (
    <div>
      <AddData handleAdd={handleAdd}></AddData>
      {loading && <h1>loading</h1>}
      {text.map((e) => (
        <h1>{e.title}</h1>
      ))}
      <div>
        <button disabled={count === 1} onClick={() => setCount(count - 1)}>
          -
        </button>
        <h4>{count}</h4>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Data;
