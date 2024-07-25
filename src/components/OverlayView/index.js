import React, { useState } from 'react'
import { loginInfo } from '../../utils/login'
import { closeIcon } from '../../utils/icon'
import { signUp } from '../../utils/signUp'
import './overlayView.style.scss'

const OverlayView = (props) => {
    const [formData, setFormData] = useState(signUp)
    const { heading, fields, primaryAction, footerInfo } = formData
    const handleFromData = (name) => {
        if (name === 'login') {
            setFormData(loginInfo)
        } else {
            setFormData(signUp)
        }
    }
    return (
        <div className='overlay-view'>
            <div className='overlay-view__wrapper'>
                <div className='overlay-view__wrapper__action'>
                    <div
                        className='overlay-view__wrapper__action__close'
                        onClick={() => props.setToggleOverlay(false)}
                    >{closeIcon}</div>
                </div>
                <div className='overlay-view__wrapper__heading'>
                    {heading.title && <div className='overlay-view__wrapper__heading__title'>{heading.title}</div>}
                    {heading.subTitle && <div className='overlay-view__wrapper__heading__subTitle'>{heading.subTitle}</div>}
                </div>
                {fields.length !== 0 && <div className='overlay-view__wrapper__form'>
                    {fields.map((_formField, index) => {
                        return (
                            <div key={index} className='overlay-view__wrapper__form__fields'>
                                <div className='overlay-view__wrapper__form__fields__labels'>
                                    <div className='overlay-view__wrapper__form__fields__labels__title'>{_formField.title}</div>
                                    {_formField.subTitle && <div className='login-page__wrapper__form__fields__labels__subTitle'>{_formField.subTitle}</div>}
                                </div>
                                <div className='overlay-view__wrapper__form__fields__input'>
                                    <input
                                        placeholder={_formField.placeholder}
                                        className={`overlay-view__wrapper__form__fields__input--${_formField.name}`}
                                    />
                                    {_formField.fiedIcon && _formField.fiedIcon}
                                </div>
                            </div>
                        )
                    })}
                    {primaryAction.length !== 0 && <div className='overlay-view__wrapper__form__actions'>
                        {primaryAction.map((_action, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`overlay-view__wrapper__form__actions--${_action.name}`}
                                    onClick={() => props.setToggleOverlay(false)}
                                >{_action.title}</button>
                            )
                        })}
                    </div>}
                    <div className='overlay-view__wrapper__form__footer'>
                        <span className='overlay-view__wrapper__form__footer__title'>{footerInfo.title}{' '}</span>
                        <span
                            className='overlay-view__wrapper__form__footer__subTitle'
                            onClick={() => handleFromData(footerInfo.name)}
                        >{footerInfo.subTitle}</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default OverlayView
