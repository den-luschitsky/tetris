/**
 * Created by otto on 2/19/17.
 */
import React, { Component } from 'react';
import {start, pause, moveShapeLeft} from '../actions/controls';
import {generateCurrent} from '../actions/shape';
import {connect} from 'react-redux';

class Controls extends Component {
    constructor(props) {
        super(props);

        this.startGame = this.startGame.bind(this);
        this.pause = this.pause.bind(this);
    }

    startGame() {
        const {dispatch} = this.props;
        dispatch(start());
        dispatch(generateCurrent());
    }

    pause() {
        this.props.dispatch(pause());
    }

    render() {
        return (
            <div className="col-md-3">
                <button className="btn btn-primary" onClick={this.startGame}>Start</button>
                <button className="btn btn-default" onClick={this.pause}>Pause</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        controls: state.controls
    };
};

export default connect(mapStateToProps)(Controls)