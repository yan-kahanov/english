import { Drawer, Container, Button, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { red, green } from '@mui/material/colors';
import React from 'react'
import { useParams } from 'react-router-dom';
import lessons from '../../lessons.json'
import { Grade, Score, Word } from '../../IndexTypes';

type Props = {
    isDrawerOpen: boolean,
    setIsDrawerOpen: (isDrawerOpen: boolean) => void,
    isAnswerRight: boolean,
    sentenceNum: number,
    score: Score,
    setScore: (score: Score) => void,
    setWords: (words: Word[]) => void
}

const PracticeDrawer: React.FC<Props> = ({isDrawerOpen, setIsDrawerOpen, 
    isAnswerRight, sentenceNum, score, setScore, setWords}) => {
    const params = useParams();
    const id = +params.id!;
    const lesson = lessons.find((_, index) => index+1 === id);
    const engSentence = lesson?.sentences[sentenceNum]?.eng;
    const gradeList = JSON.parse(localStorage.getItem('grades') ?? '[]')

    const Continue = () => {
        // drawer closing
        setIsDrawerOpen(false)
        // score updating
        setScore(isAnswerRight 
            ? {...score, success: ++score.success}
            : {...score, wrong: ++score.wrong}
        )
        // grade finding
        const foundGrade = gradeList.find((grade: Grade) => grade.id === id)
        // new grade value
        let newGradeValue: number = foundGrade?.value ?? 0
        if(isAnswerRight && newGradeValue <= 4.95) newGradeValue += 0.05
        else if(isAnswerRight) newGradeValue += 0
        else if(newGradeValue < 0.15) newGradeValue = 0
        else newGradeValue -= 0.15
        // new grade list
        let newGradeList: Grade[] = []
        if(foundGrade){
            newGradeList = gradeList.map((grade: Grade) => (
                grade.id === id ? {...grade, value: newGradeValue} : {...grade}
            ))
        }else{
            newGradeList = [...gradeList, {id, value: newGradeValue}]
        }
        // setting a new grade list
        localStorage.setItem('grades', JSON.stringify(newGradeList))
    }

    return (
        <Drawer 
        anchor='bottom'
        open={isDrawerOpen}>
            <Container maxWidth="md">
                <StyledStack gap={2} color={isAnswerRight ? green[500]: red[500]}>
                    <Typography 
                    fontSize={24}>
                        {isAnswerRight
                        ? "Здорово!"
                        : "Неверно!"}
                    </Typography>
                    {!isAnswerRight &&
                    <Stack>
                        <b>Ответ:</b>
                        <Typography fontSize={22}>
                            {engSentence}
                        </Typography>
                    </Stack>
                    }
                    <Button
                    variant="contained" 
                    fullWidth
                    size="large" 
                    onClick={Continue}
                    color={isAnswerRight ? "success" : "error"}>
                        Продолжить
                    </Button>
                </StyledStack>
            </Container>
        </Drawer>
    )
}

const StyledStack = styled(Stack)`
    min-height: 15vh;
    padding: 20px 0;
`

export default PracticeDrawer