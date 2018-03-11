/**
 * Created by otto on 2/19/17.
 */
import controls from '../constants/controls';

export const start = () => {
    return {
        type: controls.START
    };
};

export const pause = () => {
    return {
        type: controls.PAUSE
    };
};