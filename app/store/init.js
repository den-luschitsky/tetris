/**
 * Created by otto on 2/18/17.
 */

import { createStore, compose, combineReducers } from 'redux';
import reducers from '../reducers/index';
import tick from '../core/redux/tick-enhancer';
import $ from 'jquery';

const initialState = {};

const configureStore = (initStore = {}) => {
    return createStore(
        combineReducers({...reducers }),
        $.extend(true, {}, initialState, initStore),
        compose(tick(), window.devToolsExtension ? window.devToolsExtension() : f => f)
    )
};

export default configureStore