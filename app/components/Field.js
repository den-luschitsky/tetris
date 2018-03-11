import React, { Component } from 'react';
import gameSettings from '../constants/game';
import cx from 'classnames';
import { connect } from 'react-redux';
import { getCellIndex } from '../utils/fieldHelper';

class Field extends Component {
    constructor(props) {
        super(props);

        this.renderField = this.renderField.bind(this);
    }

    isCellBusy(positionByX, positionByY) {
        const { currentShape: { coordinates }, field: { cells } } = this.props;
        const coordinatesBelongsToCurrentShape = coordinates && coordinates.find((index) => {
            return index == getCellIndex(positionByX, positionByY)
        });

        return coordinatesBelongsToCurrentShape || cells[getCellIndex(positionByX, positionByY)].busy;
    }

    renderField() {
        const renderCells = (positionByX, positionByY, akk) => {
            if (positionByX == gameSettings.FIELD_SIZE_WIDTH) {
                return akk;
            }

            const cellClassName = cx({
                'col-md-1': true,
                'cell': true,
                'busy': this.isCellBusy(positionByX, positionByY)
            });

            akk.push( <
                div className = { cellClassName }
                key = { positionByX } > < /div>
            );

            return renderCells(++positionByX, positionByY, akk);
        };

        const renderRows = (positionByY, akk) => {
            if (positionByY == gameSettings.FIELD_SIZE_HEIGHT) {
                return akk;
            }

            akk.push( <
                div className = "row col-md-offset-1"
                key = { positionByY } > { renderCells(0, positionByY, []) } <
                /div>
            );

            return renderRows(++positionByY, akk);
        };

        return renderRows(0, []);
    }

    render() {
        const field = this.renderField();

        return ( <
            div className = "col-md-6" > { field } <
            /div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        field: state.field,
        currentShape: state.shape.current
    }
};

export default connect(mapStateToProps)(Field)