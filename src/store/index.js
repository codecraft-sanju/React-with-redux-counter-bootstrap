import { createStore } from "redux";

const counterReducer = (store, action) => {
    return store;
}
const createStore = createStore(counterReducer);

export default counterStore;