/**
 * Created by otto on 2/19/17.
 */

import { createReducer } from 'redux-create-reducer';
import constants from '../constants/controls';
import { getDefaultControlsState } from '../utils/store';

const initialState = {
    ...getDefaultControlsState()
};

const controls = createReducer(initialState, {
    [constants.START](state, payload) {
        return {
            ...state,
            started: true
        }
    },

    [constants.PAUSE](state, payload) {
        return {
            ...state,
            paused: !state.paused
        }
    }
});

export default controls