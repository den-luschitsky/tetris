/**
 * Created by otto on 2/19/17.
 */
import * as fieldHelper from '../utils/fieldHelper';

export const canMoveDown = (fieldState, currentCoordinates) => {
    const getShapeLowerLimits = (coordinates, akk) => {
        if (!coordinates.length) {
            return akk;
        }

        const cellPosition = fieldHelper.getCoordinatesByIndex(coordinates.shift());

        if (!akk.hasOwnProperty(cellPosition.x) || cellPosition.y > akk[cellPosition.x]) {
            akk[cellPosition.x] = cellPosition.y;
        }

        return getShapeLowerLimits(coordinates, akk);
    };

    const shapeLowerLimits = getShapeLowerLimits(currentCoordinates, {});

    return !Object.keys(shapeLowerLimits).find(x => {
        const index = fieldHelper.getCellIndex(x, ++shapeLowerLimits[x]);

        return undefined == fieldState[index] || fieldState[index].busy;
    });
};

export const canMoveLeft = (fieldState, currentCoordinates) => {
    const getShapeLeftLimits = (coordinates, akk) => {
        if (!coordinates.length) {
            return akk;
        }

        const cellPosition = fieldHelper.getCoordinatesByIndex(coordinates.shift());

        if (!akk.hasOwnProperty(cellPosition.y) || cellPosition.x < akk[cellPosition.y]) {
            akk[cellPosition.y] = cellPosition.x;
        }

        return getShapeLeftLimits(coordinates, akk);
    };

    const shapeLeftLimits = getShapeLeftLimits(currentCoordinates, {});

    return !Object.keys(shapeLeftLimits).find(y => {
        const index = fieldHelper.getCellIndex(--shapeLeftLimits[y], y);

        return undefined == fieldState[index] || fieldState[index].busy;
    });
};

export const canMoveRight = (fieldState, currentCoordinates) => {
    const getShapeRightLimits = (coordinates, akk) => {
        if (!coordinates.length) {
            return akk;
        }

        const cellPosition = fieldHelper.getCoordinatesByIndex(coordinates.shift());

        if (!akk.hasOwnProperty(cellPosition.y) || cellPosition.x > akk[cellPosition.y]) {
            akk[cellPosition.y] = cellPosition.x;
        }

        return getShapeRightLimits(coordinates, akk);
    };

    const shapeRightLimits = getShapeRightLimits(currentCoordinates, {});

    return !Object.keys(shapeRightLimits).find(y => {
        const index = fieldHelper.getCellIndex(++shapeRightLimits[y], y);

        return undefined == fieldState[index] || fieldState[index].busy;
    });
};

export const moveDown = (currentCoordinates) => {
    return currentCoordinates.map((index) => {
        let {x, y} = fieldHelper.getCoordinatesByIndex(index);
        return fieldHelper.getCellIndex(x, ++y);
    });
};

export const moveLeft = (currentCoordinates) => {
    return currentCoordinates.map((index) => {
        let {x, y} = fieldHelper.getCoordinatesByIndex(index);
        return fieldHelper.getCellIndex(--x, y);
    });
};

export const moveRight = (currentCoordinates) => {
    return currentCoordinates.map((index) => {
        let {x, y} = fieldHelper.getCoordinatesByIndex(index);
        return fieldHelper.getCellIndex(++x, y);
    });
};