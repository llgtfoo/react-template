import React, { useEffect, useState } from 'react';
export default function Index(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  return <div>{props.children}</div>;
}
