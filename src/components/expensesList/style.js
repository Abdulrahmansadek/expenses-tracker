import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Close = styled.div`
  color: red;
  font-size: 2rem;
  position: absolute;
  right: 3px;
  top: 1px;
  cursor: pointer;
`;
export const ExpenseContainer = styled.div`
  background-color: blue;
  width: 400px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px;
  position: relative;
`;
export const ExpenseElements = styled.li`
  list-style: none;
  color: white;
`;
