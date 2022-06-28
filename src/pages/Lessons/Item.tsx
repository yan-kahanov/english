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
import { green, orange } from "@mui/material/colors";

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
              <StyledAvatar
              grade={gradeValue}
              >{gradeValue.toFixed(1)}</StyledAvatar>
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

const StyledAvatar = styled(Avatar)`
  ${(props: {grade: number}) => {
    if(props.grade >= 4.5){
      return 'background:' + green[300]
    }else if(props.grade){
      return 'background:' + orange[300]
    }else {
      return ''
    }
  }}
`

export default LessonsItem;
