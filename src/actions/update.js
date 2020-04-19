/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/
import { getState, setState } from "../store";

const update = (i, imgUrl) => {
    let arr = [...getState()];
    arr[i] = imgUrl;
    setState(arr);
};

export default update;
