/**
 * Created by otto on 2/19/17.
 */
import gameSettings from '../constants/game';

export const getCellIndex = (posX, posY) => {
    return posX + '-' + posY;
};

export const getCoordinatesByIndex = index => {
    return {
        x: index.split('-')[0],
        y: index.split('-')[1]
    };
};

export const rebuild = cells => {
    const clearField = cells => {
        const clearCells = (cells, startPosX, startPosY) => {
            if (startPosX == gameSettings.FIELD_SIZE_WIDTH) {
                return cells;
            }

            cells[getCellIndex(startPosX, startPosY)].busy = false;

            return clearCells(cells, ++startPosX, startPosY);
        };

        const clearRows = (startPosY, cells) => {
            if (startPosY == gameSettings.FIELD_SIZE_HEIGHT) {
                return cells;
            }

            const hasRowGap = (cells, startPosX, startPosY) => {
                if (startPosX == gameSettings.FIELD_SIZE_WIDTH) {
                    return false;
                }

                if (!cells[getCellIndex(startPosX, startPosY)].busy) {
                    return true;
                }

                return hasRowGap(cells, ++startPosX, startPosY);
            };

            if (!hasRowGap(cells, 0, startPosY)) {
                cells = clearCells(cells, 0, startPosY);
            }

            return clearRows(++startPosY, cells);
        };

        return clearRows(0, cells);
    };

    const shiftField = cells => {
        const getRowInfo = (cells, y) => [...Array(gameSettings.FIELD_SIZE_WIDTH).keys()].map(x => {
            const index = getCellIndex(x, y);

            return {
                x: x,
                y: y,
                index: index,
                busy: cells[index].busy
            };
        });

        const isRowEmpty = row => !row.find(cell => cell.busy);

        const shiftRow = (cells, row, startPosition) => {
            Object.keys(cells).forEach(index => {
                const cell = cells[index];
                const { y } = getCoordinatesByIndex(index);

                if (y > startPosition) {

                }
            });

            return cells;
        };
    };

    const cleared = clearField(cells);
    // const shifted = shiftField(cleared);
    // debugger

    return cleared;
};