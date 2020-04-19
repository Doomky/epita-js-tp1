/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState, setState } from "../store";

const remove = (i) => {
    let arr = [...getState()];
    if (i > -1) {
        arr.splice(i,1);
    }
    setState(arr);
};

export default remove;
