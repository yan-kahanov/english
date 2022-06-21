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
import { Grade } from "../../IndexTypes";

type Props = {
  id: number,
  description: string
};

const LessonsItem: React.FC<Props> = ({id, description}) => {
  const gradeList = JSON.parse(localStorage.getItem('grades') ?? '[]')
  const foundGrade = gradeList.find((grade: Grade) => grade.id === id)
  const gradeValue = foundGrade?.value ?? 0

  return (
    <Link to={`/lessons/${id}`}>
      <StyledCard>
        <CardActionArea>
          <ListItem>
            <ListItemAvatar>
              <Avatar>{gradeValue.toFixed(1)}</Avatar>
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
