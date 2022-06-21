import React from 'react'
import { StyledChip, StyledPaper } from '.'
import { Word } from '../../IndexTypes';

type Props = {
    words: Word[]
    setWords: (words: Word[]) => void
}

const PracticeWords: React.FC<Props> = ({words, setWords}) => {
    const deleteWord = (id: number) => {
        setWords(words.filter((item) => item.id !== id))
    }

    return (
        <StyledPaper variant='outlined'>
            {words.length
            ? words.map((word: Word) => (
                <StyledChip
                key={word.id} 
                label={word.value} 
                onDelete={() => deleteWord(word.id)}
                />
            ))
            : <div>Переведите предложение</div>
            }
        </StyledPaper>
    )
}

export default PracticeWords