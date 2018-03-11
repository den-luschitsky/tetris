import * as shapeHelper from '../../utils/shape';
import { commit, rebuild } from '../../actions/field';
import { generateCurrent, moveDown, moveLeft, moveRight } from '../../actions/shape';

let gameState = {
    started: false,
    paused: false,
    field: [],
    currentShapeCoordinates: []
};

let getState = null;
let dispatch = null;

const tick = () => {
    const { started, paused, field, currentShapeCoordinates } = gameState;

    if (!started || paused) return;

    if (shapeHelper.canMoveDown(field, [...currentShapeCoordinates])) {
        dispatch(moveDown(currentShapeCoordinates));
    } else {
        dispatch(commit([...currentShapeCoordinates]));
        dispatch(rebuild({...getState().field.cells }));
        dispatch(generateCurrent());
    }
};

const tickEnhancer = () => {
    run();
    return createStore => {
        return (reducer, preloadedState, enhancer) => {
            const store = createStore(reducer, preloadedState, enhancer);
            dispatch = store.dispatch;
            getState = store.getState;

            store.subscribe(() => {
                const { field: { cells }, controls: { started, paused }, shape: { current: { coordinates } } } = getState();

                setState({
                    started: started,
                    paused: paused,
                    field: cells,
                    currentShapeCoordinates: coordinates
                });
            });

            return store;
        };
    };
};

const run = () => {
    setInterval(tick, 400);
};

const setState = (state) => {
    gameState = {...gameState, ...state };
};

export default tickEnhancer;