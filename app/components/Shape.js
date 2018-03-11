/**
 * Created by otto on 2/19/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import game from '../constants/game';
import * as shapeHelper from '../utils/shape';
import { commit, rebuild } from '../actions/field';
import { generateCurrent, moveDown, moveLeft, moveRight } from '../actions/shape';

class Shape extends Component {

    state = {
        started: false,
        coordinates: [],
        speed: game.SPEED,
    };

    constructor(props) {
        super(props);

        this.addKeyboardListeners = this.addKeyboardListeners.bind(this);
    }

    componentDidMount() {
        this.addKeyboardListeners();
    }

    addKeyboardListeners() {
        window.addEventListener('keypress', (e) => {
            switch (e.keyCode) {
                case 97:
                    this.moveLeft();
                    break;
                case 100:
                    this.moveRight();
                    break;
                case 115:
                    this.moveForceDown();
            }
        });
    }

    moveLeft() {
        const { dispatch, currentShape: { coordinates }, field: { cells } } = this.props;

        if (shapeHelper.canMoveLeft(cells, [...coordinates])) {
            dispatch(moveLeft(coordinates));
        }
    }

    moveRight() {
        const { dispatch, currentShape: { coordinates }, field: { cells } } = this.props;

        if (shapeHelper.canMoveRight(cells, [...coordinates])) {
            dispatch(moveRight(coordinates));
        }
    }

    moveForceDown() {}

    render() {
        return null;
    }
}

const mapStateToProps = state => {
    return {
        currentShape: state.shape.current,
        controls: state.controls,
        field: state.field
    }
};

export default connect(mapStateToProps)(Shape)