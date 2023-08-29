import { Provider } from "react-redux";
import { store } from "store/slice";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
export default ReduxProvider;
