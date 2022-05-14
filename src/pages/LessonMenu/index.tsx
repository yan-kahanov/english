import React from 'react'
import LessonMenuHeader from './Header'
import LessonMenuMain from './Main'

type Props = {

}

const LessonMenu: React.FC<Props> = () => {
    return (
        <>
            <LessonMenuHeader />
            <LessonMenuMain />
        </>
    )
}

export default LessonMenu