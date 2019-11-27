import React from "react";
import styled from "@emotion/styled";

const TaskBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function ToDo({ date, time, task }) {
  return (
    <TaskBox>
      <div>{date}</div>
      <div>{time}</div>
      <div>{task}</div>
    </TaskBox>
  );
}
