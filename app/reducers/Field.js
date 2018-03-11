/**
 * Created by otto on 2/18/17.
 */

import { createReducer } from 'redux-create-reducer';
import constants from '../constants/field';
import { getDefaultCellsState } from '../utils/store';

const initialState = {
    cells: getDefaultCellsState()
};

const field = createReducer(initialState, {
    [constants.RENDER_FIELD](state, action) {
        return {
            ...state,
            cells: action.payload.cells
        }
    },

    [constants.COMMIT](state, action) {
        let newState = {...state };
        let { coordinates } = action.payload;

        coordinates.forEach(index => {
            newState.cells[index].busy = true;
        });

        return newState;
    }
});

export default field