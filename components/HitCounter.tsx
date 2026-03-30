"use client";

import { useState, useEffect } from "react";

export default function HitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 90000) + 10000);
  }, []);

  return (
    <div className="hit-counter-wrap">
      <span className="hit-counter-label">you are visitor #</span>
      <span className="hit-counter-number">{count ?? "-----"}</span>
    </div>
  );
}
