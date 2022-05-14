import { Box } from "@mui/system";
import LessonsHeader from "./Header";
import LessonsList from "./List";

type Props = {};

const Lessons: React.FC<Props> = () => {
  return (
    <Box>
      <LessonsHeader />
      <LessonsList />
    </Box>
  );
};

export default Lessons;
