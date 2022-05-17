import React from 'react'
import lessons from '../../lessons.json'
import { Link, useParams } from 'react-router-dom'
import { Avatar, Card, CardActionArea, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import styled from '@emotion/styled'

type Props = {

}

const LessonMenuMain: React.FC<Props> = () => {
    const params = useParams()
    const id = +params.id!
    const lesson = lessons.find(lesson => id && lesson.id === +id)

    return (
        <>
            <Title variant='h5' align='center'>
                {lesson?.description}
            </Title>
            <List>
                <Link to={`/theory/${id}`}>
                    <StyledCard>
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
                    </StyledCard>
                </Link>
                <StyledCard>
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
            </StyledCard>
            </List>
        </>
    )
}

const StyledCard = styled(Card)`
    margin-bottom: 5px;
`

const Title = styled(Typography)`
    margin: 100px 0 25px 0;
`

export default LessonMenuMain