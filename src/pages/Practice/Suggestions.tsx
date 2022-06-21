import { Stack, styled } from '@mui/material'
import React from 'react'
import { StyledChip } from '.'
import { Word } from '../../IndexTypes'

type Props = {
    suggestions: string[] | undefined
    setWords: (words: Word[]) => void
    words: Word[]
}

const PracticeSuggestions: React.FC<Props> = ({suggestions, setWords, words}) => {
    const baseSuggestions = ["will", "do", "does", "did", "didn't", "don't", 
    "won't","doesn't", "he", "she", "it", "they", "them", "you", "i", "us", "me", "him", "her", "we"]
    const addWord = (suggest: Word) => {
        setWords([...words, suggest])
    }

    const fullSuggestions = suggestions?.concat(baseSuggestions)

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
    margin-top: 100px;
    @media screen and (max-width:375px){
        margin-top: 25px;
    }
`

export default PracticeSuggestions