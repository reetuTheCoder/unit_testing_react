import React from "react";

function CompletedCounter({ completedCount, total }) {
  return <p>Completed: {completedCount} / {total}</p>;
}

export default CompletedCounter;
