export function getToDos() {
  const toDoJson = localStorage.getItem("toDos") || "[]";
  const toDos = JSON.parse(toDoJson);
  return toDos;
}

export function setToDos(toDos) {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

export function addToDos(toDo) {
  const toDos = getToDos();
  toDos.push(toDo);
  setToDos(toDos);
}

export function removeToDos() {
  const empty = [];
  setToDos(empty);
}
