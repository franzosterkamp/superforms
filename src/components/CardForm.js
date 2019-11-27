import React from "react";
import styled from "@emotion/styled";
import { addToDos } from "./api/protocols";
import ToDoList from "./ToDoList";

const Formular = styled.form`
  display: flex;
  margin-top: 30px;
  flex-flow: column;
  justify-content: space-between;
  height: 300px;
`;

const ToDoInput = styled.textarea`
  height: 100px;
  width: 400px;
  font-size: 18px;
  text-align: left;
  margin: 20px auto;
  display: block;
`;

const DateInput = styled.input`
  margin: 20px auto;
  display: block;
`;

const TimeInput = styled.input`
  height: 40px;
  width: 200px;
  font-size: 1.5 rem;
  margin: 20px auto;
  display: block;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  margin: 10px auto;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.background};
  border: black solid 2px;
`;

const InputTitle = styled.h3`
  margin: auto;
  margin-top: 20 px;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
`;

function CardForm() {
  const [task, setTask] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [toDoElement, setToDoElement] = React.useState({});

  function handleSubmit(event) {
    event.preventDefault();

    setToDoElement({
      task,
      date,
      time
    });

    addToDos(toDoElement);
  }

  return (
    <Formular onSubmit={handleSubmit}>
      <InputTitle> to Do </InputTitle>
      <label>
        <ToDoInput
          rows="30"
          type="text"
          value={task}
          onChange={event => setTask(event.target.value)}
          required
        />
      </label>
      <InputTitle> Date </InputTitle>
      <label>
        <DateInput
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          required
        />
      </label>
      <InputTitle> Time </InputTitle>
      <label>
        <TimeInput
          type="time"
          value={time}
          onChange={event => setTime(event.target.value)}
          required
        />
      </label>
      <Button>Submit</Button>
      <Button type="reset">Reset</Button>
      <ToDoList />
    </Formular>
  );
}

export default CardForm;
