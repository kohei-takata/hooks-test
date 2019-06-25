import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  useEffect(() => {
    document.title = String(count);
  });

  useEffect(() => {
    alert(`updated ${count} times !`);
  }, [Math.floor(count/3)]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}