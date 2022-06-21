import React from 'react'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Stack } from '@mui/material';
import { Grade } from '../../IndexTypes';
import { useParams } from 'react-router-dom';

type Props = {
    score: {
        success: number,
        wrong: number
    }
}

const PracticeScore: React.FC<Props> = ({score}) => {
    const params = useParams();
    const id = +params.id!;
    const gradeList = JSON.parse(localStorage.getItem('grades') ?? '[]')
    const foundGrade = gradeList.find((grade: Grade) => grade.id === id)
    const gradeValue = foundGrade?.value ?? 0

    return (
        <Stack direction='row' spacing={1}>
            <ScoreItem>
                <StarsRoundedIcon htmlColor='#ffeb3b'/> 
                {gradeValue.toFixed(1)}
            </ScoreItem>
            <ScoreItem>
                <CheckCircleIcon htmlColor='#4caf50'/> 
                {score.success}
            </ScoreItem>
            <ScoreItem>
                <CancelIcon htmlColor='#f44336'/> 
                {score.wrong}
            </ScoreItem>
        </Stack>
    )
}

const ScoreItem = styled.div`
    max-width: 50px; 
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 2px;
`

export default PracticeScore