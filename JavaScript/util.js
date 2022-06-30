import {isFruit} from './problem2.js';

export let sortByLevel = (x,y) => {
    return x.level - y.level
}

// Number 2
const juice = isFruit('kiwi');
juice(4);
