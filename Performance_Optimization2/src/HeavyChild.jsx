import React from "react";

function HeavyChild() {
  console.log("Heavy child rendered");

  return (
    <div>
      <h2>Heavy UI Section</h2>
      <p>This component is lazy-loaded and memoized.</p>
    </div>
  );
}

export default React.memo(HeavyChild);
