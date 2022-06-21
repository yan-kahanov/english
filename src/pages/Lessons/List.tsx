import { Stack } from "@mui/material";
import React from "react";
import LessonsItem from "./Item";
import lessons from '../../lessons.json'

type Props = {};

const LessonsList: React.FC<Props> = () => {

  return (
    <Stack marginTop="75px">
      {lessons.map((lesson, index) => (
        <LessonsItem 
        key={index+1}
        id={index+1}
        description={lesson.description}
        />
      ))}
    </Stack>
  );
};

export default LessonsList;
