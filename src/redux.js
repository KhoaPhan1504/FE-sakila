import { persistStore } from "redux-persist";
import rootReducer from "./store/reducers/rootReducer";
import { createStore } from "redux";

const reduxStore = () => {
    const store = createStore(rootReducer);
    const persistor = persistStore(store);

    return { store, persistor}
}

export default reduxStore;