import React from "react";
import lessons from "../../lessons.json";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Card,
  CardActionArea,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";

type Props = {};

const LessonMenuMain: React.FC<Props> = () => {
  const params = useParams();
  const id = +params.id!;
  const lesson = lessons.find((_, index) => id && index+1 === +id);

  return (
    <>
      <Typography variant="h5" align="center" margin="100px 0 50px 0">
        {lesson?.description}
      </Typography>
      <Stack gap={1}>
        <Link to={`/theory/${id}`}>
          <Card>
            <CardActionArea>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MenuBookTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Теория" />
              </ListItem>
            </CardActionArea>
          </Card>
        </Link>
        <Link to={`/practice/${id}`}>
          <Card>
            <CardActionArea>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Практика" />
              </ListItem>
            </CardActionArea>
          </Card>
        </Link>
      </Stack>
    </>
  );
};

export default LessonMenuMain;
