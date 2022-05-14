import { List } from "@mui/material";
import React from "react";
import LessonsItem from "./Item";
import lessons from '../../lessons.json'

type Props = {};

const LessonsList: React.FC<Props> = () => {

  return (
    <List>
      {lessons.map(lesson => (
        <LessonsItem 
        key={lesson.id}
        id={lesson.id}
        description={lesson.description}
        />
      ))}
    </List>
  );
};

export default LessonsList;
