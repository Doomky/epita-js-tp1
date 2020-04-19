/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState } from "../store";

const list = () => {
    var data = [...getState()];
    return data;
};

export default list;
