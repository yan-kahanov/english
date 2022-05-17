import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";

type Props = {};

const TheoryHeader: React.FC<Props> = () => {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="md">
          <IconButton edge="start" size="large" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Title variant="h6">Теория</Title>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const Title = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default TheoryHeader;
