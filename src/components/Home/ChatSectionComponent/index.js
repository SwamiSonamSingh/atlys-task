import React from 'react'
import './chatSectionComponent.style.scss'

const ChatSectionComponent = (props) => {
    const { profileImage, userName, lastActive, primaryAction, messageSectionInfo, commentSectionInfo, edited, secondaryActions, title, index, setToggleOverlay } = props
    const handleOpenOverlay = () => {
        setToggleOverlay(true)
    }
    return (
        <div
            className='chat-section'
            key={index}
            onClick={() => handleOpenOverlay()}
        >
            {profileImage ? <div className='chat-section__profileInfo'>
                <div className='chat-section__profileInfo__left'>
                    <img
                        src={profileImage}
                        alt='Loading'
                        className='chat-section__profileInfo__left__image'
                    />
                    <div className='chat-section__profileInfo__left__activeInfo'>
                        <div className='chat-section__profileInfo__left__activeInfo__userName'>{userName}</div>
                        <div className='chat-section__profileInfo__left__activeInfo__lastActive'>
                            <span className='chat-section__profileInfo__left__activeInfo__lastActive__value'>{lastActive}</span>
                            {edited && <div className='chat-section__profileInfo__left__activeInfo__lastActive__edit'>
                                <div className='chat-section__profileInfo__left__activeInfo__lastActive__edit__indicator'></div>
                                <div className='chat-section__profileInfo__left__activeInfo__lastActive__edit__title'>Edited</div></div>}
                        </div>
                    </div>
                </div>
                <div className='chat-section__profileInfo__right'>
                    <div className='chat-section__profileInfo__right__moreAction'>{primaryAction}</div>
                </div>
            </div> : <div className='chat-section__createPostTitle'>{title}</div>}
            <div className='chat-section__messageSection'>
                <div className='chat-section__messageSection__emoji'>{messageSectionInfo.emoji}</div>
                <div className='chat-section__messageSection__text'>{messageSectionInfo.message}</div>
            </div>
            {commentSectionInfo ? <div className='chat-section__commentSection'>
                <div className='chat-section__commentSection__icon'>{commentSectionInfo.iconName}</div>
                <div className='chat-section__commentSection__value'>{commentSectionInfo.title}</div>
            </div> : <div className='chat-section__actions'>
                {secondaryActions.length !== 0 && secondaryActions.map((_action, index) => {
                    return (
                        <button key={index} className={`chat-section__actions--${_action.name}`}>{_action.title}</button>
                    )
                })}
            </div>}
        </div>
    )
}

export default ChatSectionComponent
