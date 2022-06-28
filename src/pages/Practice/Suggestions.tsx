import { Stack, styled } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { StyledChip } from '.'
import { Word } from '../../IndexTypes'
import lessons from '../../lessons.json'

type Props = {
    setWords: (words: Word[]) => void
    words: Word[]
    sentenceNum: number
}

const PracticeSuggestions: React.FC<Props> = ({setWords, words, sentenceNum}) => {
    const params = useParams();
    const id = +params.id!;
    const lesson = lessons.find((_, index) => index+1 === id);
    const suggestions = lesson?.sentences[sentenceNum]?.suggestions;
    const isNegative = lesson?.sentences[sentenceNum]?.isNegative;
    const negativeSugg: string[] = ["didn't", "don't","doesn't", "won't"]
    const positiveSugg: string[] = ["did", "do", "does", "will"]
    const addWord = (suggest: Word) => {
        setWords([...words, suggest])
    }

    const fullSuggestions = suggestions?.concat(isNegative ? negativeSugg : positiveSugg)

    return (
        <StyledStack 
        direction="row" 
        gap={1} 
        flexWrap="wrap"> 
            {fullSuggestions?.map((suggest, index) => (
                <StyledChip 
                key={index} 
                label={suggest} 
                clickable
                disabled={!!words.find(item => item.id === index)}
                onClick={() => addWord({id: index, value: suggest})}
                />
            ))}
        </StyledStack>
    )
}

const StyledStack = styled(Stack)`
    @media screen and (max-width:375px){
        margin-top: 25px;
    }
`

export default PracticeSuggestions