import React from 'react'
import {AddCardLink} from '../styles/Base'

export default ({onClick, t}) => <a onClick={onClick}>{t('Click to add card')}</a>
