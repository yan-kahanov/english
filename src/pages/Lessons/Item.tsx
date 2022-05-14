import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

type Props = {
  id: number,
  description: string
};

const LessonsItem: React.FC<Props> = ({id, description}) => {
  const gradeList = JSON.parse(localStorage.getItem('grades') ?? '[]')
  const foundGrade = gradeList.find((grade: {id: number}) => grade.id === id)
  const grade = foundGrade ? foundGrade.grade : 0

  return (
    <Link to={`/lessons/${id}`}>
      <StyledCard>
        <CardActionArea>
          <ListItem>
            <ListItemAvatar>
              <Avatar>{grade}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Урок ${id}`} secondary={description} />
          </ListItem>
        </CardActionArea>
      </StyledCard>
    </Link>
  );
};

const StyledCard = styled(Card)`
  margin-bottom: 5px;
`

export default LessonsItem;
