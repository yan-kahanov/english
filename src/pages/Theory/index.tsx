import React from "react";
import TheoryHeader from "./Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import TheoryLesson1 from "./Lesson1";
import { blue, red } from "@mui/material/colors";
import { useParams } from "react-router-dom";

type Props = {};

const Theory: React.FC<Props> = () => {
  const lessons = [TheoryLesson1]
  const params = useParams()
  const id = +params.id!
  const isIdCorrect = id <= lessons.length

  return (
    <>
      <TheoryHeader />
      <Wrapper>
        {isIdCorrect && lessons[id-1]({})}
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Box)`
  margin-top: 100px;
`;

export const Title = styled.h2`
  text-align: center;
  border: 1px solid lightgray;
  border-left: none;
  border-right: none;
  margin: 25px 0;
`

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const MainTable = styled.table`
  border-collapse: separate;
  border-spacing: 0px;
  width: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
  & td.active{
    background-color: ${blue[900]};
  }
  & td.active .focus {
    color: ${red[600]};
  }
  & .time {
    writing-mode: vertical-rl;
    text-orientation: upright;
  }

  @media screen and (max-width: 420px){
    font-size: 12px;
  }
`;

export const Cell = styled.td`
  border: 1px solid lightgray;
  & table {
    padding: 10px;
    text-align: left;
  }
  & td {
    padding: 10px;
  }
  @media screen and (max-width: 530px){
    & td{
      padding: 2px;
    }
  }
  @media screen and (max-width: 420px){
    & table{
      padding: 10px 2px;
    }
  }
`

export default Theory;
