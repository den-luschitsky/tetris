/**
 * Created by otto on 2/19/17.
 */
import constants from '../constants/field';
import * as fieldHelper from '../utils/fieldHelper';

export const commit = coordinates => {
    return {
        type: constants.COMMIT,
        payload: {
            coordinates: coordinates
        }
    };
};

export const rebuild = cells => {
    const rebuilded = fieldHelper.rebuild(cells);
    
    return {
        type: constants.RENDER_FIELD,
        payload: {
            cells: fieldHelper.rebuild(cells)
        }
    }
};