import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import React from "react";

type Props = {};

const LessonsHeader: React.FC<Props> = () => {
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
            <Typography variant="h6" component="div">
              Уроки
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default LessonsHeader;
