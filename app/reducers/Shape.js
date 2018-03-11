/**
 * Created by otto on 2/19/17.
 */

import {createReducer} from 'redux-create-reducer';
import constants from '../constants/shape';
import {getDefaultShapeState} from '../utils/store';

const initialState = {
    ...getDefaultShapeState()
};

const shape = createReducer(initialState, {

    [constants.MOVE_SHAPE](state, action) {
        return {
            ...state,
            current: {
                ...state.current,
                coordinates: action.payload.coordinates
            }
        }
    },

    [constants.GENERATE_CURRENT](state, action) {
        return {
            ...state,
            current: {
                type: action.payload.type,
                coordinates: action.payload.coordinates
            }
        }
    }

});

export default shape