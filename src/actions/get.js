/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState } from "../store";

const get = (i) => {
    let data = [...getState()];
    let value = data[i];
    return value;
};

export default get;
