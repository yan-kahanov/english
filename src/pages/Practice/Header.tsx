import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PracticeScore from "./Score";

type Props = {
  score: {
    success: number,
    wrong: number
  }
};

const PracticeHeader: React.FC<Props> = ({score}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="md">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <IconButton edge="start" size="large" onClick={() => navigate(-1)}>
              <ArrowBackIcon />
            </IconButton>
            <Stack direction="row" spacing={3}>
              <PracticeScore score={score} />
              <Link to={`/theory/${id}`}>
                <IconButton edge="end" size="large">
                  <MenuBookTwoToneIcon />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default PracticeHeader;
