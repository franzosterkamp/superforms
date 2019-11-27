import React from "react";
import { getToDos } from "./api/protocols";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = getToDos();

  return (
    <div>
      {toDos.map(toDo => (
        <ToDo key={toDo.index} {...toDo}></ToDo>
      ))}
    </div>
  );
}
