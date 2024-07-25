import React from 'react'
import { loginInfo } from '../../utils/login'
import './loginPage.style.scss'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const { heading, fields, primaryAction, footerInfo, icon } = loginInfo
    return (
        <div className='login-page'>
            <div className='login-page__logo'>{icon}</div>
            <div className='login-page__wrapper'>
                <div className='login-page__wrapper__heading'>
                    {heading.title && <div className='login-page__wrapper__heading__title'>{heading.title}</div>}
                    {heading.subTitle && <div className='login-page__wrapper__heading__subTitle'>{heading.subTitle}</div>}
                </div>
                {fields.length !== 0 && <div className='login-page__wrapper__form'>
                    {fields.map((_formField, index) => {
                        return (
                            <div key={index} className='login-page__wrapper__form__fields'>
                                <div className='login-page__wrapper__form__fields__labels'>
                                    <div className='login-page__wrapper__form__fields__labels__title'>{_formField.title}</div>
                                    {_formField.subTitle && <div className='login-page__wrapper__form__fields__labels__subTitle'>{_formField.subTitle}</div>}
                                </div>
                                <div className='login-page__wrapper__form__fields__input'>
                                    <input
                                        placeholder={_formField.placeholder}
                                        className={`login-page__wrapper__form__fields__input--${_formField.name}`}
                                    />
                                    {_formField.fiedIcon && _formField.fiedIcon}
                                </div>
                            </div>
                        )
                    })}
                    {primaryAction.length !== 0 && <div className='login-page__wrapper__form__actions'>
                        {primaryAction.map((_action, index) => {
                            return (
                                <Link to='/home'><button key={index} className={`login-page__wrapper__form__actions--${_action.name}`}>{_action.title}</button></Link>
                            )
                        })}
                    </div>}
                    <div className='login-page__wrapper__form__footer'>
                        <span className='login-page__wrapper__form__footer__title'>{footerInfo.title}{' '}</span>
                        <span className='login-page__wrapper__form__footer__subTitle'>{footerInfo.subTitle}</span>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default LoginPage
