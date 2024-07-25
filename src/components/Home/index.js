import React, { useState } from 'react'
import { postWidgetInfo } from '../../utils/postWidgetInfo'
import ChatSectionComponent from './ChatSectionComponent'
import OverlayView from '../OverlayView'
import './home.style.scss'

const Home = () => {
    const { heading, postHistory, createPostField } = postWidgetInfo
    const [toggleOverlay, setToggleOverlay] = useState(false)
    return (
        <div className='home'>
            <div className='home__heading'>
                <div className='home__heading__title'>{heading.title}</div>
                <div className='home__heading__subTitle'>{heading.subTitle}</div>
            </div>
            <div className='home__createPost'>
                <ChatSectionComponent
                    messageSectionInfo={createPostField.messageSectionInfo}
                    title={createPostField.title}
                    secondaryActions={createPostField.secondaryActions}
                    setToggleOverlay={setToggleOverlay}
                />
            </div>
            <div className='home__postHistory'>
                {postHistory.length !== 0 && postHistory.map((_post, index) => {
                    return (
                        <ChatSectionComponent
                            {..._post}
                            index={index}
                            setToggleOverlay={setToggleOverlay}
                        />
                    )
                })}
            </div>
            {toggleOverlay &&
                <OverlayView
                    setToggleOverlay={setToggleOverlay}
                />}
        </div>
    )
}

export default Home
