import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClick}>
        Click me!
      </button>
    </div>
  );
}