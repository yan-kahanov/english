import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";

type Props = {};

const LessonMenuHeader: React.FC<Props> = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  return (
    <AppBar>
      <Toolbar>
          <IconButton edge="start" size="large" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Title variant="h6">
            Урок {id}
          </Title>
      </Toolbar>
    </AppBar>
  );
};

const Title = styled(Typography)`
  position: absolute;
  top: 50%;  
  left: 50%;
  transform: translate(-50%, -50%);
`

export default LessonMenuHeader;
