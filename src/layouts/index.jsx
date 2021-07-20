import React, { useEffect, useState } from 'react';
export default function index(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return (
    <div>
      <h1>layout</h1>
      {props.children}
    </div>
  );
}
