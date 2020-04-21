import {  combineReducers } from 'redux'
// 名前が一般的すぎるので変更
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
