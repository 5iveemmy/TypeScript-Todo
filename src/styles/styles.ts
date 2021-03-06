import styled, { keyframes } from "styled-components";

export const Header = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
`;

export const ToDoForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const ToDoInput = styled.input`
  border-radius: 5px;
  border: none;
  color: white;
  outline: none;
  width: 19rem;
  padding: 13px;
  background-color: #2d2d2d;
`;

export const AddButton = styled.button`
  background-color: #ff4c6a;
  border: none;
  font-size: 11px;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background: #f7748a;
    cursor: pointer;
  }
`;

export const List = styled.div``;

export const ForToDoList = styled.div``;

export const Items = styled.div`
  background-color: #2d2d2d;
  margin-top: 1rem;
  padding: 7px;
  border-radius: 5px;
`;

export const ItemsLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0.7em 2em;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const ItemsInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Indicator = styled.div`
  width: 1.4em;
  height: 1.5em;
  background: #ff4c6a;
  position: absolute;
  top: 0em;
  left: -2em;
  border: none;
  border-radius: 0.2em;

  ${ItemsLabel}:hover & {
    background: #f7748a;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${ItemsInput}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;
