import { List } from "@mui/material";
import React from "react";
import LessonsItem from "./Item";
import lessons from '../../lessons.json'
import styled from "@emotion/styled";

type Props = {};

const LessonsList: React.FC<Props> = () => {

  return (
    <StyledList>
      {lessons.map(lesson => (
        <LessonsItem 
        key={lesson.id}
        id={lesson.id}
        description={lesson.description}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled(List)`
  margin-top: 75px;
`

export default LessonsList;
