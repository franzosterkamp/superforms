import React from "react";

export default function ToDo({ date, time, task }) {
  return (
    <div>
      <div>{date}</div>
      <div>{time}</div>
      <div>{task}</div>
    </div>
  );
}
