import React from "react";
import styled from "@emotion/styled";

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

const ToDoCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: 20px auto;
  height: 40px;
  background-color: ${props => props.theme.primary};
`;

const ToDo = styled.span`
  padding: 10px;
  font-size: 1rem;
  color: black;
`;

const Time = styled.span`
  padding: 7px;
  font-size: 1rem;
  color: black;
`;
const DateTag = styled.span`
  padding: 7px;
  font-size: 1rem;
  color: black;
`;

function CardForm() {
  const [toDo, setToDo] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [content, setContent] = React.useState(false);
  const [toDoElement, setToDoElement] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setToDoElement({
      toDo,
      date,
      time
    });
    setContent(true);
    console.log(toDoElement);
  }

  return (
    <Formular onSubmit={handleSubmit}>
      <InputTitle>What to Do ??</InputTitle>
      <label>
        <ToDoInput
          rows="30"
          type="text"
          value={toDo}
          onChange={event => setToDo(event.target.value)}
          required
        />
      </label>
      <InputTitle>What Date ??</InputTitle>
      <label>
        <DateInput
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
          required
        />
      </label>
      <InputTitle>What Time ??</InputTitle>
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
      {content && (
        <ToDoCard>
          <DateTag>{toDoElement.date}</DateTag>
          <Time>{toDoElement.time}</Time>
          <ToDo>{toDoElement.toDo} </ToDo>
        </ToDoCard>
      )}
    </Formular>
  );
}

export default CardForm;
