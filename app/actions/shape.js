/**
 * Created by otto on 2/19/17.
 */
import shape from '../constants/shape';
import * as shapeHelper from '../utils/shape';

export const generateCurrent = () => {
    return {
        type: shape.GENERATE_CURRENT,
        payload: {
            type: shape.TYPE_SQUARE,
            coordinates: ['4-0', '5-0', '4-1', '5-1']
        }
    }
};

export const moveDown = currentCoordinates => {
    return {
        type: shape.MOVE_SHAPE,
        payload: {
            coordinates: shapeHelper.moveDown(currentCoordinates)
        }
    }
};

export const moveLeft = currentCoordinates => {
    return {
        type: shape.MOVE_SHAPE,
        payload: {
            coordinates: shapeHelper.moveLeft(currentCoordinates)
        }
    }
};

export const moveRight = currentCoordinates => {
    return {
        type: shape.MOVE_SHAPE,
        payload: {
            coordinates: shapeHelper.moveRight(currentCoordinates)
        }
    }
};