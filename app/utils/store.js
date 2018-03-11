/**
 * Created by otto on 2/19/17.
 */
import gameSettings from '../constants/game';
import { getCellIndex } from './fieldHelper';

export const getDefaultCellsState = () => {
    const height = gameSettings.FIELD_SIZE_HEIGHT;
    const width = gameSettings.FIELD_SIZE_WIDTH;
    let store = {};

    const initCells = (rowIndex, colIndex) => {
        if (colIndex < width) {
            store[getCellIndex(colIndex, rowIndex)] = {
                busy: false
            };

            initCells(rowIndex, ++colIndex);
        }

        return store;
    };

    const initRows = (startRowIndex = 0) => {
        if (startRowIndex < height) {
            initCells(startRowIndex, 0);
            initRows(++startRowIndex)
        }

        return store;
    };

    return initRows();
};

export const getDefaultControlsState = () => {
    return {
        started: false,
        paused: false,
    };
};

export const getDefaultShapeState = () => {
    return {
        current: {
            type: null,
            coordinates: null
        },
        next: {
            type: null
        }
    }
};