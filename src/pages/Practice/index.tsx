import styled from "@emotion/styled";
import { Button, Chip, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PracticeHeader from "./Header";
import lessons from "../../lessons.json";
import useRandomNum from "../../hooks/useRandomNum";
import PracticeSuggestions from "./Suggestions";
import PracticeWords from "./Words";
import PracticeDrawer from "./Drawer";
import { Score, Word } from "../../IndexTypes";

type Props = {};

const Practice: React.FC<Props> = () => {
  const params = useParams();
  const getRadnomNum = useRandomNum();
  const id = +params.id!;
  const lesson = lessons.find((_, index) => index+1 === id);
  const [score, setScore] = React.useState<Score>({success: 0, wrong: 0})
  const sentenceNum = React.useMemo(() => (
    getRadnomNum(lesson?.sentences.length ?? 0)
  ), [score]);
  const [words, setWords] = React.useState<Word[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isAnswerRight, setIsAnswerRight] = useState(false)

  const checkTranslate = () => {
    const engSentence = lesson?.sentences[sentenceNum]?.eng;
    const rightAnswer = engSentence?.split(/[,.!? ]/).join("").toLowerCase();
    const wordsValues: string[] = words.map(item => item.value)
    setIsAnswerRight(rightAnswer === wordsValues.join(""))

    setIsDrawerOpen(true)
};

  useEffect(() => {
    setWords([])
  }, [score])

  return (
    <div>
      <PracticeHeader score={score}/>
      <Content>
        <StyledPaper elevation={3}>
          {lesson?.sentences[sentenceNum]?.rus}
        </StyledPaper>
        <PracticeWords 
        words={words} 
        setWords={setWords} 
        />
        <PracticeSuggestions
          words={words}
          setWords={setWords}
          sentenceNum={sentenceNum}
        />
        <CheckBtn 
        onClick={checkTranslate} 
        variant="contained" 
        size="large"
        disabled={!words.length}  
        fullWidth>
          Проверить
        </CheckBtn>
        <PracticeDrawer 
        isDrawerOpen={isDrawerOpen} 
        setIsDrawerOpen={setIsDrawerOpen}
        isAnswerRight={isAnswerRight}
        sentenceNum={sentenceNum}
        score={score}
        setScore={setScore}
        setWords={setWords}
        />
      </Content>
    </div>
  );
};

const Content = styled.div`
  position: relative;
  height: 85vh;
  margin-top: 100px;
`;

export const StyledPaper = styled(Paper)`
  position: relative;
  padding: 10px 15px;
  font-size: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  min-height: 75px;
  @media screen and (max-width: 375px){
    min-height: 50px;
  }
`;

const CheckBtn = styled(Button)`
  position: absolute;
  bottom: 25px;
`

export const StyledChip = styled(Chip)`
  font-size: 24px;
  min-height: 50px;
  @media screen and (max-width: 375px){
    font-size: 20px;
    min-height: 25px;
  }
`

export default Practice;
