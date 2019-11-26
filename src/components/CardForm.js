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

function CardForm() {
  return (
    <Formular>
      <InputTitle>What to Do ??</InputTitle>
      <label>
        <ToDoInput rows="30" type="text" required />
      </label>
      <InputTitle>What Date ??</InputTitle>
      <label>
        <DateInput type="date" required />
      </label>
      <InputTitle>What Time ??</InputTitle>
      <label>
        <TimeInput type="time" required />
      </label>
      <Button>Submit</Button>
      <Button type="reset">Reset</Button>
    </Formular>
  );
}

export default CardForm;
